import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecruitmentUserComponent } from './list-recruitment-user.component';

describe('ListRecruitmentUserComponent', () => {
  let component: ListRecruitmentUserComponent;
  let fixture: ComponentFixture<ListRecruitmentUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRecruitmentUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecruitmentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
