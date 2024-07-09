import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TonguetwistersPage } from './tonguetwisters.page';

describe('TonguetwistersPage', () => {
  let component: TonguetwistersPage;
  let fixture: ComponentFixture<TonguetwistersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TonguetwistersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
