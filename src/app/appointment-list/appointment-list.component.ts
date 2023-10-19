import { Component,OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent  implements OnInit {
  ngOnInit(): void {
    let savedappoiintemnt = localStorage.getItem("appointmentskey")
    this.appointment = savedappoiintemnt ? JSON.parse(savedappoiintemnt) : []
  }

  appointmentTitle : string ='';
  appointmentDate : Date =new Date();
  appointment : Appointment[] = [];
  id: number = 0;

  clickanddisplay(){

    if (this.appointmentTitle.trim().length && this.appointmentDate){
      let newAppointment : Appointment = {
        id: this.id,
        title: this.appointmentTitle,
        date: this.appointmentDate
      }
      this.appointment.push(newAppointment);
      this.id = this.id+1;
    }
    
    this.appointmentDate = new Date();
    this.appointmentTitle = "";

    localStorage.setItem("appointmentskey" , JSON.stringify(this.appointment))
  }

  deleteit(i: number){
    this.appointment.splice(i,1);
    localStorage.setItem("appointmentskey" , JSON.stringify(this.appointment))
  }
}
