const tokenizer = require('../tokenizer');


describe('tokenizer', () => {
  it('parses punctuation - period', () => {
    expect(tokenizer('.')).toEqual([
      { type: 'punctuation', value: '.' },
    ]);
  });

  it('parses punctuation - comma', () => {
    expect(tokenizer(',')).toEqual([
      { type: 'punctuation', value: ',' },
    ]);
  });

  it('parses an operator', () => {
    expect(tokenizer('add')).toEqual([
      { type: 'operator', value: 'add' },
    ]);
  });

  it('parses a keyword', () => {
    expect(tokenizer('and')).toEqual([
      { type: 'keyword', value: 'and' },
    ]);
  });

  it('parses a number', () => {
    expect(tokenizer('6')).toEqual([
      { type: 'number', value: 6 },
    ]);
  });

  it('throws for an unknown word', () => {
    expect(() => tokenizer('woohoo')).toThrow();
  });


});
