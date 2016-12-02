describe('App', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('show todo Add', function () {
    element(by.id('title')).sendKeys('my text');
    element(by.id('add')).click();

    expect(element(by.css('.todo-item')).getText()).toEqual('my text')
  });

  it('show todo toggled', function () {
    element(by.css('.chek')).click();
    expect(element(by.css('.todo-item')).getAttribute('class')).toMatch('done')

    element(by.css('.chek')).click();
    expect(element(by.css('.todo-item')).getAttribute('class')).not.toMatch('done')
  });

  it('show todo deleted', function () {
    var before = element(by.css('my-todo-item')).isPresent()
    element(by.css('.delete')).click();
    var after = element(by.css('my-todo-item')).isPresent()

    expect(before).not.toBe(after)
  });
 });
