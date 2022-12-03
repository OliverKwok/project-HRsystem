import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // check before insert instead of deleting table
  async function seedRow(table: string, rowData: object) {
    let row = await knex(table).select('id').where(rowData).first();
    if (!row) {
      let rows = await knex(table).insert(rowData).returning('id');
      row = rows[0];
    }
    return row;
  }
  await seedRow('employee', {
    employeeid: 'DEMO001',
    first_name: 'Tse Hin',
    last_name: 'Chan',
    chinese_name: '陳梓軒',
    alias: 'Liam',
    hkid: 'X522891(9)',
    passport: 'A80662169',
    gender: 'M',
    nationality: 'China',
    date_of_birth: '1997-07-24',
    profilepic: 'DEMO001.jpg',
    mobile_countrycode: '86',
    mobile_no: '62862337',
    work_phone_no: '28886289',
    email_personal: 'liamchan@gmail.com',
    email_work: 'tse.hin.chan@company.com',
    password: '1',
    highest_education: 'Bachelor',
    institution_name: 'City University of Hong Kong',
    major: 'Actuarial Science',
    last_job_company: 'Bank of China',
    last_job_title: 'Director',
    start_date: '2010-01-08',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '90',
    report_to: 1,
    al_leave_entitled_peryear: '20',
    pay_currency: 'HKD',
    basic_salary: '100000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 12, 3/F, Fu Fai Yuen, Chi Fu Fa Yuen, Pok Fu Lam',
    bank_code: '221',
    bank_name: 'China Construction Bank Corporation',
    bank_number: '381-133443-792',
    bank_payee: 'Chan Tse Hin',
    payment_remark: 'NA',
    al_leave_taken: '10',
  });
  await seedRow('employee', {
    employeeid: 'DEMO002',
    first_name: 'Yu Hin',
    last_name: 'Lee',
    chinese_name: '李宇軒',
    alias: 'Noah',
    hkid: 'Y672490(4)',
    passport: 'B64763752',
    gender: 'M',
    nationality: 'UK',
    date_of_birth: '1990-06-30',
    profilepic: 'DEMO002.jpg',
    mobile_countrycode: '44',
    mobile_no: '93420837',
    work_phone_no: '28882518',
    email_personal: 'noahlee@gmail.com',
    email_work: 'yu.hin.lee@company.com',
    password: '1',
    highest_education: 'Bachelor',
    institution_name: 'Hong Kong Baptist University',
    major: 'Sociology',
    last_job_company: 'Bank of China',
    last_job_title: 'CEO',
    start_date: '2012-01-04',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '90',
    report_to: 1,
    al_leave_entitled_peryear: '20',
    pay_currency: 'HKD',
    basic_salary: '85000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 1, 9/F, Yiu Hei House, Tung Hei Court, Shau Kei Wan',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '165-678784-803',
    bank_payee: 'Lee Yu Hin',
    payment_remark: 'NA',
    al_leave_taken: '13',
  });
  await seedRow('employee', {
    employeeid: 'DEMO003',
    first_name: 'Tse Him',
    last_name: 'Cheung',
    chinese_name: '張子謙',
    alias: 'Oliver',
    hkid: 'Z885789(8)',
    passport: 'C99474854',
    gender: 'M',
    nationality: 'HK',
    date_of_birth: '1996-06-16',
    profilepic: 'DEMO003.jpg',
    mobile_countrycode: '852',
    mobile_no: '91501947',
    work_phone_no: '28884923',
    email_personal: 'olivercheung@gmail.com',
    email_work: 'tse.him.cheung@company.com',
    password: '1',
    highest_education: 'Bachelor',
    institution_name: 'Lingnan University',
    major: 'Chemistry',
    last_job_company: 'Bank of East Asia',
    last_job_title: 'Finance Controller',
    start_date: '2012-09-23',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '90',
    report_to: 1,
    al_leave_entitled_peryear: '20',
    pay_currency: 'HKD',
    basic_salary: '80000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 3, 6/F, Block 3, La Cite Noble, Tseung Kwan O',
    bank_code: '024',
    bank_name: 'Hang Seng Bank Limit',
    bank_number: '487-532513-528',
    bank_payee: 'Cheung Tse Him',
    payment_remark: 'NA',
    al_leave_taken: '7',
  });
  await seedRow('employee', {
    employeeid: 'DEMO004',
    first_name: 'Lok Him',
    last_name: 'Wong',
    chinese_name: '黃樂軒',
    alias: 'Elijah',
    hkid: 'X223216(2)',
    passport: 'D63931909',
    gender: 'M',
    nationality: 'UK',
    date_of_birth: '1995-03-17',
    profilepic: 'DEMO004.jpg',
    mobile_countrycode: '44',
    mobile_no: '93054043',
    work_phone_no: '28881488',
    email_personal: 'elijahwong@gmail.com',
    email_work: 'lok.him.wong@company.com',
    password: '1',
    highest_education: 'Bachelor',
    institution_name: 'The Hong Kong University of Science and Technology',
    major: 'Social Media',
    last_job_company: 'Cable TV Hong Kong',
    last_job_title: 'Sales Manager',
    start_date: '2014-04-16',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '90',
    report_to: 2,
    al_leave_entitled_peryear: '18',
    pay_currency: 'HKD',
    basic_salary: '75000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 2, 18/F, Choi Ying House, Choi Po Court, Sheung Shui',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '602-665770-246',
    bank_payee: 'Wong Lok Him',
    payment_remark: 'NA',
    al_leave_taken: '2',
  });
  await seedRow('employee', {
    employeeid: 'DEMO005',
    first_name: 'Tse Long',
    last_name: 'Ho',
    chinese_name: '何子朗',
    alias: 'James',
    hkid: 'Y848205(6)',
    passport: 'E69729790',
    gender: 'M',
    nationality: 'HK',
    date_of_birth: '1993-06-14',
    profilepic: 'DEMO005.jpg',
    mobile_countrycode: '852',
    mobile_no: '56224875',
    work_phone_no: '28887058',
    email_personal: 'jamesho@gmail.com',
    email_work: 'tse.long.ho@company.com',
    password: '1',
    highest_education: 'Bachelor',
    institution_name: 'The University of Hong Kong',
    major: 'Biology',
    last_job_company: 'Café de Coral',
    last_job_title: 'Sales Manager',
    start_date: '2015-01-12',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '60',
    report_to: 4,
    al_leave_entitled_peryear: '17',
    pay_currency: 'HKD',
    basic_salary: '55000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 6, 12/F, Yee Dat House, Yee Nga Court, Tai Po',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '106-694690-758',
    bank_payee: 'Ho Tse Long',
    payment_remark: 'NA',
    al_leave_taken: '5',
  });
  await seedRow('employee', {
    employeeid: 'DEMO006',
    first_name: 'Ka Lok',
    last_name: 'Chan',
    chinese_name: '陳家樂',
    alias: 'William',
    hkid: 'Z744887(9)',
    passport: 'A48694631',
    gender: 'M',
    nationality: 'China',
    date_of_birth: '1992-09-28',
    profilepic: 'DEMO006.jpg',
    mobile_countrycode: '86',
    mobile_no: '58700496',
    work_phone_no: '28885202',
    email_personal: 'williamchan@gmail.com',
    email_work: 'ka.lok.chan@company.com',
    password: '1',
    highest_education: 'Master',
    institution_name: 'The Chinese University of Hong Kong',
    major: 'Art',
    last_job_company: 'Capital Artists',
    last_job_title: 'Marketing Associate',
    start_date: '2015-04-01',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '60',
    report_to: 2,
    al_leave_entitled_peryear: '16',
    pay_currency: 'HKD',
    basic_salary: '50000',
    payment_method: 'bank_transfer',
    home_address:
      'Flat 4, 15/F, High Block, Hok Sam House, Lung Hang Estate, Tai Wai',
    bank_code: '214',
    bank_name: 'Industrial and Commercial Bank of China Limited',
    bank_number: '378-220494-809',
    bank_payee: 'Chan Ka Lok',
    payment_remark: 'NA',
    al_leave_taken: '6',
  });
  await seedRow('employee', {
    employeeid: 'DEMO007',
    first_name: 'Cheuk Lam',
    last_name: 'Lee',
    chinese_name: '李卓霖',
    alias: 'Benjamin',
    hkid: 'X864027(2)',
    passport: 'B95436919',
    gender: 'M',
    nationality: 'UK',
    date_of_birth: '2000-01-14',
    profilepic: 'DEMO007.jpg',
    mobile_countrycode: '44',
    mobile_no: '65763566',
    work_phone_no: '28881943',
    email_personal: 'benjaminlee@gmail.com',
    email_work: 'cheuk.lam.lee@company.com',
    password: '1',
    highest_education: 'Master',
    institution_name: 'The Education University of Hong Kong',
    major: 'Statistics',
    last_job_company: 'Cathay Dragon',
    last_job_title: 'Finance Manager',
    start_date: '2015-08-24',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '60',
    report_to: 3,
    al_leave_entitled_peryear: '14',
    pay_currency: 'HKD',
    basic_salary: '45000',
    payment_method: 'bank_transfer',
    home_address:
      'Flat 5, 18/F, Block A, Tai Yan House, Tai Yuen Estate, Tai Po',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '586-695232-132',
    bank_payee: 'Lee Cheuk Lam',
    payment_remark: 'NA',
    al_leave_taken: '7',
  });
  await seedRow('employee', {
    employeeid: 'DEMO008',
    first_name: 'Tse Hin',
    last_name: 'Cheung',
    chinese_name: '張子軒',
    alias: 'Lucas',
    hkid: 'Y399057(3)',
    passport: 'C81761743',
    gender: 'M',
    nationality: 'HK',
    date_of_birth: '1999-10-03',
    profilepic: 'DEMO008.jpg',
    mobile_countrycode: '852',
    mobile_no: '64613791',
    work_phone_no: '28889142',
    email_personal: 'lucascheung@gmail.com',
    email_work: 'tse.hin.cheung@company.com',
    password: '1',
    highest_education: 'Bachelor',
    institution_name: 'The Hong Kong Polytechnic University',
    major: 'English',
    last_job_company: 'Cathay Pacific',
    last_job_title: 'Finance Manager',
    start_date: '2016-03-17',
    status: 'retired',
    job_nature: 'full_time',
    notice_period: '30',
    report_to: 3,
    al_leave_entitled_peryear: '14',
    pay_currency: 'HKD',
    basic_salary: '40000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 6, 39/F, Kai Tung House, Yu Tung Court, Tung Chung',
    bank_code: '024',
    bank_name: 'Hang Seng Bank Limit',
    bank_number: '390-469227-726',
    bank_payee: 'Cheung Tse Hin',
    payment_remark: 'NA',
    al_leave_taken: '4',
  });
  await seedRow('employee', {
    employeeid: 'DEMO009',
    first_name: 'Chun Hei',
    last_name: 'Wong',
    chinese_name: '黃俊熙',
    alias: 'Henry',
    hkid: 'Z725242(4)',
    passport: 'D33288455',
    gender: 'M',
    nationality: 'China',
    date_of_birth: '2000-02-02',
    profilepic: 'DEMO009.jpg',
    mobile_countrycode: '86',
    mobile_no: '95017697',
    work_phone_no: '28884277',
    email_personal: 'henrywong@gmail.com',
    email_work: 'chun.hei.wong@company.com',
    password: '1',
    highest_education: 'Bachelor',
    institution_name: 'City University of Hong Kong',
    major: 'Sculpture',
    last_job_company: 'Chekiang First Bank',
    last_job_title: 'Social Media Manager',
    start_date: '2017-06-14',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '30',
    report_to: 6,
    al_leave_entitled_peryear: '14',
    pay_currency: 'HKD',
    basic_salary: '40000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 13, 15/F, Block 3, Fu Ning Garden, Tseung Kwan O',
    bank_code: '221',
    bank_name: 'China Construction Bank Corporation',
    bank_number: '182-722587-169',
    bank_payee: 'Wong Chun Hei',
    payment_remark: 'NA',
    al_leave_taken: '6',
  });
  await seedRow('employee', {
    employeeid: 'DEMO010',
    first_name: 'Ho Yin',
    last_name: 'Ho',
    chinese_name: '何浩賢',
    alias: 'Theodore',
    hkid: 'X992757(6)',
    passport: 'E60883816',
    gender: 'M',
    nationality: 'UK',
    date_of_birth: '1994-02-25',
    profilepic: 'DEMO010.jpg',
    mobile_countrycode: '44',
    mobile_no: '92870011',
    work_phone_no: '28881146',
    email_personal: 'theodoreho@gmail.com',
    email_work: 'ho.yin.ho@company.com',
    password: '1',
    highest_education: 'Bachelor',
    institution_name: 'Hong Kong Baptist University',
    major: 'Photography',
    last_job_company: 'Chinachem Group',
    last_job_title: 'Analyst',
    start_date: '2017-09-28',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '30',
    report_to: 7,
    al_leave_entitled_peryear: '14',
    pay_currency: 'HKD',
    basic_salary: '40000',
    payment_method: 'bank_transfer',
    home_address:
      'Flat 5, 33/F, Fei Fung House, Choi Wan (I) Estate, Ngau Chi Wan',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '808-914629-797',
    bank_payee: 'Ho Ho Yin',
    payment_remark: 'NA',
    al_leave_taken: '8',
  });
  await seedRow('employee', {
    employeeid: 'DEMO011',
    first_name: 'Hoi Ching',
    last_name: 'Chan',
    chinese_name: '陳凱晴',
    alias: 'Olivia',
    hkid: 'Y142917(7)',
    passport: 'A11033477',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '1997-02-09',
    profilepic: 'DEMO011.jpg',
    mobile_countrycode: '852',
    mobile_no: '95071970',
    work_phone_no: '28887952',
    email_personal: 'oliviachan@gmail.com',
    email_work: 'hoi.ching.chan@company.com',
    password: '1',
    highest_education: 'Bachelor',
    institution_name: 'Lingnan University',
    major: 'History',
    last_job_company: 'Chu Kong Passenger Transport Co., Ltd',
    last_job_title: 'Sale Associate',
    start_date: '2018-01-14',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '30',
    report_to: 5,
    al_leave_entitled_peryear: '12',
    pay_currency: 'HKD',
    basic_salary: '35000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 11, 6/F, Tower 4, Goodview Garden, Tuen Mun',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '100-887364-402',
    bank_payee: 'Chan Hoi Ching',
    payment_remark: 'NA',
    al_leave_taken: '2',
  });
  await seedRow('employee', {
    employeeid: 'DEMO012',
    first_name: 'Tse Ching',
    last_name: 'Lee',
    chinese_name: '李芷晴',
    alias: 'Emma',
    hkid: 'Z421447(10)',
    passport: 'B49798934',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '1990-01-28',
    profilepic: 'DEMO012.jpg',
    mobile_countrycode: '852',
    mobile_no: '51090294',
    work_phone_no: '28883075',
    email_personal: 'emmalee@gmail.com',
    email_work: 'tse.ching.lee@company.com',
    password: '1',
    highest_education: 'Bachelor',
    institution_name: 'The Hong Kong University of Science and Technology',
    major: 'Chemistry',
    last_job_company: 'CITIC Bank International',
    last_job_title: 'Marketing Coodinator',
    start_date: '2018-10-03',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '30',
    report_to: 6,
    al_leave_entitled_peryear: '11',
    pay_currency: 'HKD',
    basic_salary: '30000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 2, 6/F, Tower 2, The Waterside, Ma On Shan',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '204-735459-437',
    bank_payee: 'Lee Tse Ching',
    payment_remark: 'NA',
    al_leave_taken: '8',
  });
  await seedRow('employee', {
    employeeid: 'DEMO013',
    first_name: 'Hiu Ching',
    last_name: 'Cheung',
    chinese_name: '張曉晴',
    alias: 'Charlotte',
    hkid: 'X451067(10)',
    passport: 'C28705115',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '1996-04-14',
    profilepic: 'DEMO013.jpg',
    mobile_countrycode: '852',
    mobile_no: '58278813',
    work_phone_no: '28887376',
    email_personal: 'charlottecheung@gmail.com',
    email_work: 'hiu.ching.cheung@company.com',
    password: '1',
    highest_education: 'Master',
    institution_name: 'The University of Hong Kong',
    major: 'Graphic Design',
    last_job_company: 'City Telecom',
    last_job_title: 'Analyst',
    start_date: '2018-02-02',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '30',
    report_to: 7,
    al_leave_entitled_peryear: '10',
    pay_currency: 'HKD',
    basic_salary: '30000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 2, 3/F, Yuen Fu House, Tin Fu Court, Tin Shui Wai',
    bank_code: '214',
    bank_name: 'Industrial and Commercial Bank of China Limited',
    bank_number: '152-560128-168',
    bank_payee: 'Cheung Hiu Ching',
    payment_remark: 'NA',
    al_leave_taken: '2',
  });
  await seedRow('employee', {
    employeeid: 'DEMO014',
    first_name: 'Tse Ching',
    last_name: 'Wong',
    chinese_name: '黃子晴',
    alias: 'Amelia',
    hkid: 'Y946972(8)',
    passport: 'D57228148',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '1996-01-23',
    profilepic: 'DEMO014.jpg',
    mobile_countrycode: '852',
    mobile_no: '67289843',
    work_phone_no: '28887728',
    email_personal: 'ameliawong@gmail.com',
    email_work: 'tse.ching.wong@company.com',
    password: '1',
    highest_education: 'Master',
    institution_name: 'The Chinese University of Hong Kong',
    major: 'Statistics',
    last_job_company: 'Citybus Limited',
    last_job_title: 'Copywriter',
    start_date: '2019-02-25',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '30',
    report_to: 9,
    al_leave_entitled_peryear: '10',
    pay_currency: 'HKD',
    basic_salary: '28000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 1, 15/F, Lok Kwai House, Kwai Fuk Court, Kwai Chung',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '555-815215-634',
    bank_payee: 'Wong Tse Ching',
    payment_remark: 'NA',
    al_leave_taken: '3',
  });
  await seedRow('employee', {
    employeeid: 'DEMO015',
    first_name: 'Hoi Lam',
    last_name: 'Ho',
    chinese_name: '何凱琳',
    alias: 'Ava',
    hkid: 'Z449276(8)',
    passport: 'E48386975',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '1993-01-18',
    profilepic: 'DEMO015.jpg',
    mobile_countrycode: '852',
    mobile_no: '66549830',
    work_phone_no: '28881173',
    email_personal: 'avaho@gmail.com',
    email_work: 'hoi.lam.ho@company.com',
    password: '1',
    highest_education: 'Bachelor',
    institution_name: 'The Education University of Hong Kong',
    major: 'Political Science',
    last_job_company: 'CK Hutchison Holdings',
    last_job_title: 'Copywriter (Chi and Eng)',
    start_date: '2020-02-09',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '30',
    report_to: 9,
    al_leave_entitled_peryear: '10',
    pay_currency: 'HKD',
    basic_salary: '25000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 5, 9/F, Tower 6, Tseung Kwan O Plaza, Tseung Kwan O',
    bank_code: '003',
    bank_name: 'Standard Chartered Bank (Hong Kong) Limited',
    bank_number: '482-201590-990',
    bank_payee: 'Ho Hoi Lam',
    payment_remark: 'NA',
    al_leave_taken: '1',
  });
  await seedRow('employee', {
    employeeid: 'DEMO016',
    first_name: 'Hui Tung',
    last_name: 'Chan',
    chinese_name: '陳曉彤',
    alias: 'Sophia',
    hkid: 'X821718(6)',
    passport: 'A12327960',
    gender: 'F',
    nationality: 'China',
    date_of_birth: '1992-07-18',
    profilepic: 'DEMO016.jpg',
    mobile_countrycode: '86',
    mobile_no: '98780468',
    work_phone_no: '28889101',
    email_personal: 'sophiachan@gmail.com',
    email_work: 'hui.tung.chan@company.com',
    password: '1',
    highest_education: 'Bachelor',
    institution_name: 'The Hong Kong Polytechnic University',
    major: 'Jewelry and Metalsmithing',
    last_job_company: 'CLP Group',
    last_job_title: 'Sale Executive',
    start_date: '2020-01-28',
    status: 'contract',
    contract_end_date: '2022-12-27',
    job_nature: 'intern',
    notice_period: '15',
    report_to: 11,
    al_leave_entitled_peryear: '0',
    pay_currency: 'HKD',
    basic_salary: '21000',
    payment_method: 'cheque',
    home_address: 'Flat 3, 12/F, Lok Sang House, Kin Sang Estate, Tuen Mun',
    bank_code: '214',
    bank_name: 'Industrial and Commercial Bank of China Limited',
    bank_number: '665-436413-561',
    bank_payee: 'Chan Hui Tung',
    payment_remark: 'NA',
    al_leave_taken: '0',
  });
  await seedRow('employee', {
    employeeid: 'DEMO017',
    first_name: 'Tse Ching',
    last_name: 'Lee',
    chinese_name: '李紫晴',
    alias: 'Isabella',
    hkid: 'Y522639(3)',
    passport: 'B71736409',
    gender: 'F',
    nationality: 'UK',
    date_of_birth: '2000-01-08',
    profilepic: 'DEMO017.jpg',
    mobile_countrycode: '44',
    mobile_no: '94177916',
    work_phone_no: '28882566',
    email_personal: 'isabellalee@gmail.com',
    email_work: 'tse.ching.lee@company.com',
    password: '1',
    highest_education: 'Bachelor',
    institution_name: 'City University of Hong Kong',
    major: 'Multidisciplinary Studies',
    last_job_company: 'Commercial Radio Hong Kong',
    last_job_title: 'Sale Executive',
    start_date: '2020-04-14',
    status: 'contract',
    contract_end_date: '2023-01-13',
    job_nature: 'temp',
    notice_period: '7',
    report_to: 11,
    al_leave_entitled_peryear: '0',
    pay_currency: 'HKD',
    basic_salary: '18000',
    payment_method: 'cash',
    home_address:
      'Flat 4, 15/F, The Eastborne, 51 Shau Kei Wan Main Street East, Shau Kei Wan',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '193-267727-528',
    bank_payee: 'Lee Tse Ching',
    payment_remark: 'NA',
    al_leave_taken: '0',
  });
  await seedRow('employee', {
    employeeid: 'DEMO018',
    first_name: 'Ka Yee',
    last_name: 'Cheung',
    chinese_name: '張嘉怡',
    alias: 'Mia',
    hkid: 'Z818991(8)',
    passport: 'C10050998',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '1999-01-04',
    profilepic: 'DEMO018.jpg',
    mobile_countrycode: '852',
    mobile_no: '91707145',
    work_phone_no: '28883096',
    email_personal: 'miacheung@gmail.com',
    email_work: 'ka.yee.cheung@company.com',
    password: '1',
    highest_education: 'Bachelor',
    institution_name: 'Hong Kong Baptist University',
    major: 'Philosophy',
    last_job_company: 'Crocodile Garments',
    last_job_title: 'Sale Executive',
    start_date: '2021-01-23',
    status: 'terminated',
    job_nature: 'part_time',
    notice_period: '7',
    report_to: 11,
    al_leave_entitled_peryear: '0',
    pay_currency: 'HKD',
    basic_salary: '18000',
    payment_method: 'cheque',
    home_address: 'Flat 5, 36/F, Block 3, Handsome Court, Tuen Mun',
    bank_code: '024',
    bank_name: 'Hang Seng Bank Limit',
    bank_number: '511-247963-269',
    bank_payee: 'Cheung Ka Yee',
    payment_remark: 'NA',
    al_leave_taken: '0',
  });
  await seedRow('employee', {
    employeeid: 'DEMO019',
    first_name: 'Tse Ching',
    last_name: 'Wong',
    chinese_name: '黃梓晴',
    alias: 'Evelyn',
    hkid: 'X800452(3)',
    passport: 'D64906564',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '2000-09-23',
    profilepic: 'DEMO019.jpg',
    mobile_countrycode: '852',
    mobile_no: '54770831',
    work_phone_no: '28881867',
    email_personal: 'evelynwong@gmail.com',
    email_work: 'tse.ching.wong@company.com',
    password: '1',
    highest_education: 'Bachelor',
    institution_name: 'Lingnan University',
    major: 'Business',
    last_job_company: 'DBS Bank',
    last_job_title: 'Designer',
    start_date: '2021-01-18',
    status: 'resigned',
    job_nature: 'intern',
    notice_period: '7',
    report_to: 12,
    al_leave_entitled_peryear: '0',
    pay_currency: 'HKD',
    basic_salary: '18000',
    payment_method: 'cheque',
    home_address: 'Flat 12, 12/F, Beverley Heights, Belair Gardens, Sha Tin',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '870-892802-209',
    bank_payee: 'Wong Tse Ching',
    payment_remark: 'NA',
    al_leave_taken: '0',
  });
  await seedRow('employee', {
    employeeid: 'DEMO020',
    first_name: 'Lok Yiu',
    last_name: 'Ho',
    chinese_name: '何樂瑤',
    alias: 'Harper',
    hkid: 'Y569503(8)',
    passport: 'E39506467',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '1994-04-16',
    profilepic: 'DEMO020.jpg',
    mobile_countrycode: '852',
    mobile_no: '58816049',
    work_phone_no: '28889486',
    email_personal: 'harperho@gmail.com',
    email_work: 'lok.yiu.ho@company.com',
    password: '1',
    highest_education: 'Bachelor',
    institution_name: 'The Hong Kong University of Science and Technology',
    major: 'Business',
    last_job_company: 'Esprit Holdings',
    last_job_title: 'Designer',
    start_date: '2021-07-18',
    status: 'probation',
    probation_end_date: '2023-01-17',
    job_nature: 'full_time',
    notice_period: '7',
    report_to: 12,
    al_leave_entitled_peryear: '9',
    pay_currency: 'HKD',
    basic_salary: '25000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 4, 35/F, Block 10, Melody Garden, Tuen Mun',
    bank_code: '024',
    bank_name: 'Hang Seng Bank Limit',
    bank_number: '900-532220-643',
    bank_payee: 'Ho Lok Yiu',
    payment_remark: 'NA',
    al_leave_taken: '6',
  });
  await seedRow('employee', {
    employeeid: 'DEMO021',
    first_name: 'Tse Ching',
    last_name: 'Chan',
    chinese_name: '陳梓晴',
    alias: 'Connie',
    hkid: 'X832543(3)',
    passport: 'C65597462',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '1992-01-12',
    profilepic: 'DEMO021.jpg',
    mobile_countrycode: '852',
    mobile_no: '55231551',
    work_phone_no: '28883543',
    email_personal: 'conniechan@gmail.com',
    email_work: 'tse.ching.chan@company.com',
    password: '1',
    highest_education: 'Master',
    institution_name: 'The University of Hong Kong',
    major: 'Human Resource',
    last_job_company: 'Hongkong and Shanghai Banking Corporation (HSBC)',
    last_job_title: 'Human Resource Manager',
    start_date: '2016-04-01',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '60',
    report_to: 2,
    al_leave_entitled_peryear: '14',
    pay_currency: 'HKD',
    basic_salary: '43000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 12, 32/F, Mei Ka Court, South Horizons, Ap Lei Chau',
    bank_code: '024',
    bank_name: 'Hang Seng Bank Limit',
    bank_number: '524-512303-516',
    bank_payee: 'Chan Tse Ching',
    payment_remark: 'NA',
    al_leave_taken: '3',
  });
  await seedRow('employee', {
    employeeid: 'DEMO022',
    first_name: 'Yu Tung',
    last_name: 'Lee',
    chinese_name: '李雨桐',
    alias: 'Rachel',
    hkid: 'Y218524(3)',
    passport: 'D51111396',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '2000-04-01',
    profilepic: 'DEMO022.jpg',
    mobile_countrycode: '852',
    mobile_no: '92165432',
    work_phone_no: '28882346',
    email_personal: 'rachellee@gmail.com',
    email_work: 'yu.tung.lee@company.com',
    password: '1',
    highest_education: 'Bachelor',
    institution_name: 'The Chinese University of Hong Kong',
    major: 'Business',
    last_job_company: 'Hongkong Electric Company',
    last_job_title: 'Human Resource Officer',
    start_date: '2018-08-24',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '30',
    report_to: 21,
    al_leave_entitled_peryear: '10',
    pay_currency: 'HKD',
    basic_salary: '32000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 8, 3/F, Hang Wo House, Tai Wo Estate, Tai Po',
    bank_code: '004',
    bank_name: 'The Hong Kong & Shanghai Banking Corporation Limited',
    bank_number: '612-513213-521',
    bank_payee: 'Lee Yu Tung',
    payment_remark: 'NA',
    al_leave_taken: '8',
  });
  await seedRow('employee', {
    employeeid: 'DEMO023',
    first_name: 'Tse Ki',
    last_name: 'Cheung',
    chinese_name: '張子琪',
    alias: 'Sophia',
    hkid: 'Z851361(7)',
    passport: 'E73566084',
    gender: 'F',
    nationality: 'HK',
    date_of_birth: '1999-08-24',
    profilepic: 'DEMO023.jpg',
    mobile_countrycode: '852',
    mobile_no: '68646132',
    work_phone_no: '28882462',
    email_personal: 'sophiachan@gmail.com',
    email_work: 'tse.ki.cheung@company.com',
    password: '1',
    highest_education: 'Bachelor',
    institution_name: 'The Education University of Hong Kong',
    major: 'Business',
    last_job_company: 'Hongkong Post',
    last_job_title: 'Human Resource Assistant',
    start_date: '2018-03-17',
    status: 'perm',
    job_nature: 'full_time',
    notice_period: '30',
    report_to: 21,
    al_leave_entitled_peryear: '8',
    pay_currency: 'HKD',
    basic_salary: '27000',
    payment_method: 'bank_transfer',
    home_address: 'Flat 23, 35/F, Yee Hau House, Yee Nga Court, Tai Po',
    bank_code: '024',
    bank_name: 'Hang Seng Bank Limit',
    bank_number: '212-231424-324',
    bank_payee: 'Cheung Tse Ki',
    payment_remark: 'NA',
    al_leave_taken: '2',
  });
}
