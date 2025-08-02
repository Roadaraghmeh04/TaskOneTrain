import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFist } from './my-fist';

describe('MyFist', () => {
  let component: MyFist;
  let fixture: ComponentFixture<MyFist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFist]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFist);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
