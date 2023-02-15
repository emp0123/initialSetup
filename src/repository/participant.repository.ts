import { execute } from "@/config/database/queryWrapperMysql";

export type QueryParams = {
  page: number;
  offset: number;
};

export type CountType = {
  totalRecord: number;
};

let countQuery = `select count(_id) as totalRecord from participants`;
const query = `SELECT * FROM participants  order by createdAt desc limit ?,?`;
export class ParticipantRepository {
  async getParticipantList({ page, offset }: QueryParams) {
    const count = (await execute(countQuery)) as CountType[];
    const data = (await execute(query, [page, offset])) as any[];
    return {
      count,
      data,
    };
  }
}
