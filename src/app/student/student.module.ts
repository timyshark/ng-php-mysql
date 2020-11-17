import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { StudentRoutingModule } from './student-routing.module';
import { createStudentCanDeactivateGuardService } from './_operations/edit-student/edit-student-can-deactivate-guard.service';
import { CreateStudentComponent } from './_operations/edit-student/edit-student.component';
import { AccordionComponent } from './_operations/display-student/accordion/accordion.component';
import { DisplayStudentComponent } from './_operations/display-student/display-student.component';
import { ListStudentsComponent } from './_operations/list-students/list-students.component';
import { StudentDetailsComponent } from './_operations/student-details/student-details.component';
import { UpdateStudentComponent } from './_operations/update-student/update-student.component';
import { SchoolValidator } from './_services/school.validator';
import { StudentDetailGuardService } from './_services/student-details-guard.service';
import { StudentFilterPipe } from './_services/student-filter.pipe';
import { StudentListResolverService } from './_services/student-list-resolver.service';
import { StudentService } from './_services/student.service';
import { StudentsFooterComponent } from './_tiles/footer/students-footer.component';
import { StudentsHeaderComponent } from './_tiles/header/students-header.component';
import { HomeComponent } from './_tiles/home/home.component';
import { StudentsLayoutComponent } from './_tiles/students-layout/students-layout.component';



@NgModule({
  declarations: [
    DisplayStudentComponent,
    StudentDetailsComponent,
    StudentFilterPipe,
    ListStudentsComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    SchoolValidator,
    AccordionComponent,
    StudentsLayoutComponent,
    StudentsHeaderComponent,
    StudentsFooterComponent,
    HomeComponent,
    


  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StudentRoutingModule,
    FormsModule ,
    BsDatepickerModule.forRoot(),
//    BrowserAnimationsModule,
  ],
  providers: [
    StudentService,
    createStudentCanDeactivateGuardService,
    StudentListResolverService, StudentDetailGuardService
  ] 
  })
export class StudentModule { }
