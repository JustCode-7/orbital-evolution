import { TestBed } from '@angular/core/testing';
import { GameDialog } from './game-dialog';
import { provideRouter } from '@angular/router';

describe('GameDialog', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameDialog],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(GameDialog);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should toggle isShowSpinner and display loading indicator in the intro button', () => {
    const fixture = TestBed.createComponent(GameDialog);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.isShowSpinner()).toBe(false);
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('.spinner-border')).toBeFalsy();

    component.showSpinner();
    fixture.detectChanges();

    expect(component.isShowSpinner()).toBe(true);
    expect(element.querySelector('.spinner-border')).toBeTruthy();
  });
});
