 'use strict';

describe('Filters', function(){ // describe your object type

    beforeEach(module('reverseStringFilter')); // load module

    describe('reverse',function(){ // describe app name
        var reverse;

        beforeEach(inject(function($filter){ // initialize filter
            reverse = $filter('reverseString',{});
        }));

        it('Should reverse a string', function(){  // write tests
            expect(reverse('stone')).toBe('enots'); // pass
            expect(reverse('don')).toBe('nod'); // pass
           // expect(reverse('jam')).toBe('oops'); // this test should fail
        });
    });
});
