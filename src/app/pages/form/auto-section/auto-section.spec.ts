import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSection } from './auto-section';

describe('AutoSection', () => {
  let component: AutoSection;
  let fixture: ComponentFixture<AutoSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
