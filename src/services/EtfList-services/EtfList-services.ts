import { NoDataExistException } from '../../exceptions/NoDataExist-exception';
import { execute } from '../../config/database/queryWrapperMysql';

export const EtfListService = {
  getEtfList: async () => { 

    const query = `SELECT * etf_table;`;
    let data: any = await execute(query, []);
    if (data.length == 0) {
      throw new NoDataExistException();
    }
    return {
      data: data,
      // totalPage: Math.ceil(count[0].totalRecord / limit),
    };
  }
}