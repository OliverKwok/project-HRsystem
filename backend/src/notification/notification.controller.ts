import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get('getEventRecord')
  async getEventRecord() {
    return await this.notificationService.getEventRecord();
  }

  @Get('getNotifications')
  async getNotifications() {
    return await this.notificationService.getNotifications();
  }

  @Post('postNewEvent')
  postNewEvent(@Body() data) {
    if (
      data['eventName'] == '' ||
      data['eventDate'] == '' ||
      data['eventDetails'] == ''
    ) {
      console.log("'All input should be filled'");

      return 'All input should be filled';
    } else {
      return this.notificationService.postNewEvent(data);
    }
  }

  @Post('postNewNotification')
  postNewNotification(@Body() data) {
    if (
      data['notificationTitle'] == '' ||
      data['notificationMessage'] == '' ||
      data['notificationRecipient'] == ''
    ) {
      console.log("'All input should be filled'");

      return 'All input should be filled';
    } else {
      return this.notificationService.postNewNotification(data);
    }
  }
  // @Post()
  // create(@Body() createNotificationDto: CreateNotificationDto) {
  //   return this.notificationService.create(createNotificationDto);
  // }

  // @Get()
  // findAll() {
  //   return this.notificationService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.notificationService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateNotificationDto: UpdateNotificationDto) {
  //   return this.notificationService.update(+id, updateNotificationDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.notificationService.remove(+id);
  // }
}
