import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComparesoundsPage } from './comparesounds.page';

describe('ComparesoundsPage', () => {
  let component: ComparesoundsPage;
  let fixture: ComponentFixture<ComparesoundsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparesoundsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
