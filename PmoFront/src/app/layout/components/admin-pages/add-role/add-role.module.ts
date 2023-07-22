import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AddRoleRoutingModule } from './add-role-routing.module';
import { AddRoleComponent } from './add-role.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
@NgModule({
  declarations: [
    AddRoleComponent
  ],
  imports: [
    CommonModule,
    AddRoleRoutingModule,
    ReactiveFormsModule,
    TableModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    CardModule
  ]
})
export class AddRoleModule { }
