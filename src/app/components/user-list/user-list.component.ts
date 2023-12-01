import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  public dataSource: MatTableDataSource<User>;
  public columnsToDisplay: string[] = [
    'first_name',
    'last_name',
    'email',
    'account_id',
  ];
  public columnLabels: { [key: string]: string } = {
    first_name: 'First Name',
    last_name: 'Last Name',
    email: 'Email',
    account_id: 'Account ID',
  };
  public totalItems: number;
  public currentPageIndex = 0;
  public pageSize = 10;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService
      .getUsers(
        this.currentPageIndex,
        this.pageSize,
        this.sort?.active,
        this.sort?.direction
      )
      .subscribe((users) => {
        this.dataSource = new MatTableDataSource(users);
        this.totalItems = users.length;

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement)?.value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
