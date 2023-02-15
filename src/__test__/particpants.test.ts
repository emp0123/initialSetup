import { ParticipantListService } from '../services/participants/participantList-service';
import '../config/env';
import { ParticipantRepository } from '../repository/participant.repository';
import { NoDataExistException } from '../exceptions/NoDataExist-exception';

afterAll(async () => {
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 500));
});


describe('Testing Participant Service', () => {
  test('Should return some participants', async () => {
    const service = new ParticipantListService(new ParticipantRepository());
    const result = await service.participants(1);
    expect(result).toEqual(
      expect.objectContaining({
        success: expect.anything(),
        data: expect.arrayContaining([
          expect.objectContaining({
            sid: expect.any(String),
          }),
        ]),
        totalPage: expect.any(Number),
      })
    );
  });

  test('Should throw exception if no data found', async () => {
    const service = new ParticipantListService(new ParticipantRepository());
    const func = async () => {
      await service.participants(Number.MAX_SAFE_INTEGER);
    };
    expect(func).rejects.toThrow(NoDataExistException);
  });
});
