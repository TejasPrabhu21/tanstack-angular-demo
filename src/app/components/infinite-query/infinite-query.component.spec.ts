import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteQueryComponent } from './infinite-query.component';

describe('InfiniteQueryComponent', () => {
  let component: InfiniteQueryComponent;
  let fixture: ComponentFixture<InfiniteQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfiniteQueryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfiniteQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
