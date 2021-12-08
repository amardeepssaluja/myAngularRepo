import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphiesComponent } from './giphies.component';

describe('GiphiesComponent', () => {
  let component: GiphiesComponent;
  let fixture: ComponentFixture<GiphiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
