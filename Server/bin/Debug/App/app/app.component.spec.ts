import {AppComponent} from './app.component';

describe('app component', () => {
    
    it('Returns correct name', () =>
    {
        let cpnt: AppComponent = new AppComponent();
        let result: string = cpnt.pageTitle();
        expect(result).toEqual("Starter files for Angular2: Getting Started.");
    });
    
});
