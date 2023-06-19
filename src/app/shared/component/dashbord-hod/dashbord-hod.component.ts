import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { StaffleaveService } from '../../services/staffleave.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashbord-hod',
  templateUrl: './dashbord-hod.component.html',
  styleUrls: ['./dashbord-hod.component.scss'],
})
export class DashbordHodComponent implements OnInit {
  staffLeave!: Array<any>;
  updatedObj!: any;
  updatedArr!: Array<any>;
  random: number = Math.random();
  constructor(
    private _StaffleaveService: StaffleaveService,
    _http: HttpClient
  ) {}
  ngOnInit(): void {
    this._StaffleaveService.GetAllLeaveAppl().subscribe((res) => {
      // let p = ((new Date(res[0].enddate).getTime()-new Date(res[0].startdate).getTime())/86400000);
      this.staffLeave = res.map((ele) => ({
        ...ele,
        leaveDays:
          Math.floor(
            (new Date(ele.enddate).getTime() -
              new Date(ele.startdate).getTime()) /
              86400000
          ) + 1,
      }));
      this.staffLeave = this.staffLeave.filter(
        (ele) => ele.LeaveStatus === 'Pending'
      );

      console.log(this.staffLeave);
    });
  }
  status!: string;
  msg: boolean = false;
  AfterClickbuttonApproved!: string;
  AfterClickbuttonRejecteed!: string;
  editId!: number;
  OnReplay(str: string, Obj: any) {
    if (str === 'Approved') {
      this.AfterClickbuttonApproved = str;
    } else if (str === 'Rejected') {
      this.AfterClickbuttonRejecteed = str;
    }

    this.editId = Obj.id;
    console.log(Obj);
    let ObjNew = {
      startdate: Obj.startdate,
      enddate: Obj.enddate,
      reason: Obj.reason,
      LeaveStatus: str,
      StaffName: Obj.StaffName,
      leaveDays: Obj.leaveDays,
      id: Obj.id,
    };
    console.log(ObjNew);

    this._StaffleaveService.PatchObj(ObjNew).subscribe((data) => {
      var obj = data;
      console.log(data);

      let findindex = this.staffLeave.findIndex((ele) => ele.id === obj.id);
      console.log(findindex);
      this.staffLeave.splice(findindex, 1, obj);
    });

    /*  this._StaffleaveService.GetAllLeaveAppl().subscribe((res) => {
      this.updatedArr = res;
    }); */

    /*     let xhr = new XMLHttpRequest();
    console.log(xhr.status) */
  }
}
