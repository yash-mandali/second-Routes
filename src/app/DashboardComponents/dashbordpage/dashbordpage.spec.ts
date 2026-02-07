import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dashbordpage } from './dashbordpage';

describe('Dashbordpage', () => {
  let component: Dashbordpage;
  let fixture: ComponentFixture<Dashbordpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dashbordpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dashbordpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
