import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRecruitmentnewComponent } from './detail-recruitmentnew.component';

describe('DetailRecruitmentnewComponent', () => {
  let component: DetailRecruitmentnewComponent;
  let fixture: ComponentFixture<DetailRecruitmentnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRecruitmentnewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRecruitmentnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
