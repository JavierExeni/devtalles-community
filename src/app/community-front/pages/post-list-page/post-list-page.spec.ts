import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListPage } from './post-list-page';

describe('PostListPage', () => {
  let component: PostListPage;
  let fixture: ComponentFixture<PostListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostListPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
