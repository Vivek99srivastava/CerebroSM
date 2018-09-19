import { CerebromanagerModule } from './cerebromanager.module';

describe('CerebromanagerModule', () => {
  let cerebromanagerModule: CerebromanagerModule;

  beforeEach(() => {
    cerebromanagerModule = new CerebromanagerModule();
  });

  it('should create an instance', () => {
    expect(cerebromanagerModule).toBeTruthy();
  });
});
