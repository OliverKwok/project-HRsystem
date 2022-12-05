import {
  HttpException,
  Injectable,
  HttpStatus,
  ConsoleLogger,
  MethodNotAllowedException,
} from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';

@Injectable()
export class DataService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async getJobStatus() {
    let jobStatus = await this.knex.raw(`
    select status, count(*) as num from employee group by status
    ;`);

    const result = jobStatus.rows;

    // const datasetsInput = [
    //   {
    //     label: 'Job Status of Employees',
    //     backgroundColor: [
    //       'rgba(255, 99, 132, 0.2)',
    //       'rgba(54, 162, 235, 0.2)',
    //       'rgba(255, 206, 86, 0.2)',
    //       'rgba(75, 192, 192, 0.2)',
    //       'rgba(153, 102, 255, 0.2)',
    //       'rgba(255, 159, 64, 0.2)',
    //     ],
    //     borderColor: [
    //       'rgba(255, 99, 132, 1)',
    //       'rgba(54, 162, 235, 1)',
    //       'rgba(255, 206, 86, 1)',
    //       'rgba(75, 192, 192, 1)',
    //       'rgba(153, 102, 255, 1)',
    //       'rgba(255, 159, 64, 1)',
    //     ],
    //     borderWidth: 1,
    //   },
    // ];

    // const statusArr = [];
    // result.forEach((data) => {
    //   statusArr.push(data.status);
    // });

    const numArr = [];
    result.forEach((data) => {
      numArr.push(+data.num);
    });
    // console.log(numArr);

    // let output = {};
    // output['labels'] = statusArr;
    // datasetsInput[0]['data'] = numArr;
    // output['datasets'] = datasetsInput;

    return numArr;
  }
}
