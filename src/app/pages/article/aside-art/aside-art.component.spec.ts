import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideArtComponent } from './aside-art.component';

describe('AsideArtComponent', () => {
  let component: AsideArtComponent;
  let fixture: ComponentFixture<AsideArtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideArtComponent]
    });
    fixture = TestBed.createComponent(AsideArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
