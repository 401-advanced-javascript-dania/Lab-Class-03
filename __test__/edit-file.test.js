

jest.mock('fs');
const reader = require('../reader.js');
describe (' readerWithCallback ' , () =>
{
  it('it can read a file  ', () =>
  {let file = `${__dirname}/../../data/person.json`;
    return reader.readerWithCallback(file,(error,data) =>
    { expect(error).toBe(undefined);
      expect(typeof data).toBe('string');
    });
  });
  it('can read a file and the typpe of data', () =>
  {let file = `${__dirname}/../../data/file.txt`;
    return reader.readerWithCallback(file,(error,data) =>
    { expect(typeof data).toBe('string');
    });
  });

  it('can return an error if was abad file ', () =>
  {let file = `${__dirname}/../../badFile/person.json`;
    return reader.readerWithCallback(file,(error,data) =>
    {   expect(error).toEqual('Invalid File');
    });
  });

});
describe ('readerWithPromise' , () =>
{it('it can read a file ', () =>
{ let file = `${__dirname}/../../data/person.json`;
  reader.readerWithPromise(file)
    .then(data => expect(data).toBeDefined())
    .catch(error => expect(error).not.toBeDefined());
});

it('Write a File and return the contect of it after updated it\'s the same ', () =>
{let file = `${__dirname}/../../data/person.json`;
  let person = {'firstName':'dania','lastName':'alrababah'};
  reader.readerWithPromise(file)
    .then(data => expect(data).toBeDefined())
    .then(data => expect(data).toBe(person));
});

it('it can write file  ', () =>
{let file = `${__dirname}/../../data/person.json`;
  let person = {'firstName':'dania','lastName':'alrababah'};
  reader.readerWithPromise(file)
    .then(data => expect(data).toBeDefined())
    .then(data => expect(data.firstName).toBe(person.firstName))
    .catch(error => expect(error).not.toBeDefined());
});

});

