import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrieComponent } from './entrie.component';

describe('EntrieComponent', () => {
  let component: EntrieComponent;
  let fixture: ComponentFixture<EntrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
