import { InjectKnex, Knex } from 'nestjs-knex';
import { Injectable } from '@nestjs/common';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Injectable()
export class NotificationService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async getEventRecord() {
    try {
      let res = await this.knex.select('*').from('event').orderBy('id', 'desc');
      return { res };
    } catch (err) {
      return err;
    }
  }

  async getNotifications() {
    try {
      let res = await this.knex
        .select('*')
        .from('notification')
        .orderBy('id', 'desc');
      return { res };
    } catch (err) {
      return err;
    }
  }

  async postNewEvent(data) {
    try {
      let res = await this.knex
        .table('event')
        .insert({
          event_name: data['eventName'],
          date: data['eventDate'],
          details: data['eventDetails'],
        })
        .returning('id');
      return { res };
    } catch (err) {
      return err;
    }
  }
  async postNewNotification(data) {
    try {
      console.log(data);
      let res = await this.knex
        .table('notification')
        .insert({
          title: data['notificationTitle'],
          message: data['notificationMessage'],
          message_type: 'company',
          recipient: data['notificationRecipient'],
        })
        .returning('id');
      return { res };
    } catch (err) {
      console.log(err);

      return err;
    }
  }

  // create(createNotificationDto: CreateNotificationDto) {
  //   return 'This action adds a new notification';
  // }

  // findAll() {
  //   return `This action returns all notification`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} notification`;
  // }

  // update(id: number, updateNotificationDto: UpdateNotificationDto) {
  //   return `This action updates a #${id} notification`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} notification`;
  // }
}
