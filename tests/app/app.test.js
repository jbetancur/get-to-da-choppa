import { name } from '../../src/app';
import angular from 'angular';

describe('App: Testing Modules', () => {
  describe('App Module:', () => {

    let module;
    beforeEach(() => {
      module = angular.module(name);
    });

    it('should be registered', () => {
      expect(module).not.toBeNull();
    });

    describe('Dependencies:', () => {

      let deps;
      let hasModule = (m) => {
        return deps.indexOf(m) >= 0;
      };
      beforeEach(() => {
        deps = module.value(name).requires;
      });

      //you can also test the module's dependencies
      it('should have App.Controllers as a dependency', () => {
        expect(hasModule('ui.router')).toBe(true);
      });

      it('should have App.Directives as a dependency', () => {
        expect(hasModule('choppaApp.controllers')).toBe(true);
      });

      it('should have App.Filters as a dependency', () => {
        expect(hasModule('choppaApp.directives')).toBe(true);
      });

      it('should have App.Routes as a dependency', () => {
        expect(hasModule('choppaApp.services')).toBe(true);
      });
    });
  });
});
