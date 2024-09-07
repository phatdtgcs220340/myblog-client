import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMessageComponent } from './popup-message.component';

describe('PopupMessageComponent', () => {
  let component: PopupMessageComponent;
  let fixture: ComponentFixture<PopupMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
