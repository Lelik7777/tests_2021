import {student01} from '../02_objects/02objiects';
import {addTechnology} from './03_functions';

test('add technology to student01',function () {
   expect(student01.technologies.length).toBe(4);
   addTechnology(student01,'Angular');
   expect(student01.technologies.length).toBe(5);
   expect(student01.technologies[4].title).toBe('Angular');
   expect(student01.technologies[4].id).toBe(new Date().getTime());
});