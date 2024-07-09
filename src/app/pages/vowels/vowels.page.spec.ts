import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VowelsPage } from './vowels.page';

describe('VowelsPage', () => {
  let component: VowelsPage;
  let fixture: ComponentFixture<VowelsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VowelsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
