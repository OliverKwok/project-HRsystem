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

  async getYearService() {
    let yearService = await this.knex.raw(`
    select gender, start_date from employee`);

    const json = yearService.rows;

    function calculateYear(day) {
      var ageDifMs = Date.now() - day;
      var ageDate = new Date(ageDifMs);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    let maleArr = [0, 0, 0, 0, 0];
    let femaleArr = [0, 0, 0, 0, 0];

    json.forEach((data) => {
      if (calculateYear(new Date(data.start_date)) < 1 && data.gender == 'M') {
        maleArr[0] = maleArr[0] + 1;
      } else if (
        calculateYear(new Date(data.start_date)) >= 1 &&
        calculateYear(new Date(data.start_date)) < 3 &&
        data.gender == 'M'
      ) {
        maleArr[1] = maleArr[1] + 1;
      } else if (
        calculateYear(new Date(data.start_date)) >= 3 &&
        calculateYear(new Date(data.start_date)) < 5 &&
        data.gender == 'M'
      ) {
        maleArr[2] = maleArr[2] + 1;
      } else if (
        calculateYear(new Date(data.start_date)) >= 5 &&
        calculateYear(new Date(data.start_date)) < 8 &&
        data.gender == 'M'
      ) {
        maleArr[3] = maleArr[3] + 1;
      } else if (
        calculateYear(new Date(data.start_date)) >= 8 &&
        data.gender == 'M'
      ) {
        maleArr[4] = maleArr[4] + 1;
      } else if (
        calculateYear(new Date(data.start_date)) < 1 &&
        data.gender == 'F'
      ) {
        maleArr[0] = maleArr[0] + 1;
      } else if (
        calculateYear(new Date(data.start_date)) >= 1 &&
        calculateYear(new Date(data.start_date)) < 3 &&
        data.gender == 'F'
      ) {
        femaleArr[1] = femaleArr[1] + 1;
      } else if (
        calculateYear(new Date(data.start_date)) >= 3 &&
        calculateYear(new Date(data.start_date)) < 5 &&
        data.gender == 'F'
      ) {
        femaleArr[2] = femaleArr[2] + 1;
      } else if (
        calculateYear(new Date(data.start_date)) >= 5 &&
        calculateYear(new Date(data.start_date)) < 8 &&
        data.gender == 'F'
      ) {
        femaleArr[3] = femaleArr[3] + 1;
      } else if (
        calculateYear(new Date(data.start_date)) >= 8 &&
        data.gender == 'F'
      ) {
        femaleArr[4] = femaleArr[4] + 1;
      }
    });

    return { maleArr, femaleArr };
  }
}
