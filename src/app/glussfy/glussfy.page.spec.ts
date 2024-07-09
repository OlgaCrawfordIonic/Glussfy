import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlussfyPage } from './glussfy.page';

describe('GlussfyPage', () => {
  let component: GlussfyPage;
  let fixture: ComponentFixture<GlussfyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GlussfyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
