/* */ 
"format cjs";
import { verifyNoBrowserErrors } from 'angular2/src/testing/e2e_util';
function waitForElement(selector) {
    var EC = protractor.ExpectedConditions;
    // Waits for the element with id 'abc' to be present on the dom.
    browser.wait(EC.presenceOf($(selector)), 20000);
}
function waitForAlert() {
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.alertIsPresent(), 1000);
}
describe('can deactivate example app', function () {
    afterEach(verifyNoBrowserErrors);
    var URL = 'angular2/examples/router/ts/can_deactivate/';
    it('should not navigate away when prompt is cancelled', function () {
        browser.get(URL);
        waitForElement('note-index-cmp');
        element(by.css('#note-1-link')).click();
        waitForElement('note-cmp');
        browser.navigate().back();
        waitForAlert();
        browser.switchTo().alert().dismiss(); // Use to simulate cancel button
        expect(element(by.css('note-cmp')).getText()).toContain('id: 1');
    });
    it('should navigate away when prompt is confirmed', function () {
        browser.get(URL);
        waitForElement('note-index-cmp');
        element(by.css('#note-1-link')).click();
        waitForElement('note-cmp');
        browser.navigate().back();
        waitForAlert();
        browser.switchTo().alert().accept();
        waitForElement('note-index-cmp');
        expect(element(by.css('note-index-cmp')).getText()).toContain('Your Notes');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuX2RlYWN0aXZhdGVfc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFuZ3VsYXIyL2V4YW1wbGVzL3JvdXRlci90cy9jYW5fZGVhY3RpdmF0ZS9jYW5fZGVhY3RpdmF0ZV9zcGVjLnRzIl0sIm5hbWVzIjpbIndhaXRGb3JFbGVtZW50Iiwid2FpdEZvckFsZXJ0Il0sIm1hcHBpbmdzIjoiT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sK0JBQStCO0FBRW5FLHdCQUF3QixRQUFnQjtJQUN0Q0EsSUFBSUEsRUFBRUEsR0FBU0EsVUFBV0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQTtJQUM5Q0EsZ0VBQWdFQTtJQUNoRUEsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsVUFBVUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7QUFDbERBLENBQUNBO0FBRUQ7SUFDRUMsSUFBSUEsRUFBRUEsR0FBU0EsVUFBV0EsQ0FBQ0Esa0JBQWtCQSxDQUFDQTtJQUM5Q0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsY0FBY0EsRUFBRUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7QUFDMUNBLENBQUNBO0FBRUQsUUFBUSxDQUFDLDRCQUE0QixFQUFFO0lBRXJDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBRWpDLElBQUksR0FBRyxHQUFHLDZDQUE2QyxDQUFDO0lBRXhELEVBQUUsQ0FBQyxtREFBbUQsRUFBRTtRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRWpDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTNCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixZQUFZLEVBQUUsQ0FBQztRQUVmLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFFLGdDQUFnQztRQUV2RSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNuRSxDQUFDLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywrQ0FBK0MsRUFBRTtRQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRWpDLE9BQU8sQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRTNCLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixZQUFZLEVBQUUsQ0FBQztRQUVmLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVwQyxjQUFjLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUVqQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlFLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3ZlcmlmeU5vQnJvd3NlckVycm9yc30gZnJvbSAnYW5ndWxhcjIvc3JjL3Rlc3RpbmcvZTJlX3V0aWwnO1xuXG5mdW5jdGlvbiB3YWl0Rm9yRWxlbWVudChzZWxlY3Rvcjogc3RyaW5nKSB7XG4gIHZhciBFQyA9ICg8YW55PnByb3RyYWN0b3IpLkV4cGVjdGVkQ29uZGl0aW9ucztcbiAgLy8gV2FpdHMgZm9yIHRoZSBlbGVtZW50IHdpdGggaWQgJ2FiYycgdG8gYmUgcHJlc2VudCBvbiB0aGUgZG9tLlxuICBicm93c2VyLndhaXQoRUMucHJlc2VuY2VPZigkKHNlbGVjdG9yKSksIDIwMDAwKTtcbn1cblxuZnVuY3Rpb24gd2FpdEZvckFsZXJ0KCkge1xuICB2YXIgRUMgPSAoPGFueT5wcm90cmFjdG9yKS5FeHBlY3RlZENvbmRpdGlvbnM7XG4gIGJyb3dzZXIud2FpdChFQy5hbGVydElzUHJlc2VudCgpLCAxMDAwKTtcbn1cblxuZGVzY3JpYmUoJ2NhbiBkZWFjdGl2YXRlIGV4YW1wbGUgYXBwJywgZnVuY3Rpb24oKSB7XG5cbiAgYWZ0ZXJFYWNoKHZlcmlmeU5vQnJvd3NlckVycm9ycyk7XG5cbiAgdmFyIFVSTCA9ICdhbmd1bGFyMi9leGFtcGxlcy9yb3V0ZXIvdHMvY2FuX2RlYWN0aXZhdGUvJztcblxuICBpdCgnc2hvdWxkIG5vdCBuYXZpZ2F0ZSBhd2F5IHdoZW4gcHJvbXB0IGlzIGNhbmNlbGxlZCcsIGZ1bmN0aW9uKCkge1xuICAgIGJyb3dzZXIuZ2V0KFVSTCk7XG4gICAgd2FpdEZvckVsZW1lbnQoJ25vdGUtaW5kZXgtY21wJyk7XG5cbiAgICBlbGVtZW50KGJ5LmNzcygnI25vdGUtMS1saW5rJykpLmNsaWNrKCk7XG4gICAgd2FpdEZvckVsZW1lbnQoJ25vdGUtY21wJyk7XG5cbiAgICBicm93c2VyLm5hdmlnYXRlKCkuYmFjaygpO1xuICAgIHdhaXRGb3JBbGVydCgpO1xuXG4gICAgYnJvd3Nlci5zd2l0Y2hUbygpLmFsZXJ0KCkuZGlzbWlzcygpOyAgLy8gVXNlIHRvIHNpbXVsYXRlIGNhbmNlbCBidXR0b25cblxuICAgIGV4cGVjdChlbGVtZW50KGJ5LmNzcygnbm90ZS1jbXAnKSkuZ2V0VGV4dCgpKS50b0NvbnRhaW4oJ2lkOiAxJyk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgbmF2aWdhdGUgYXdheSB3aGVuIHByb21wdCBpcyBjb25maXJtZWQnLCBmdW5jdGlvbigpIHtcbiAgICBicm93c2VyLmdldChVUkwpO1xuICAgIHdhaXRGb3JFbGVtZW50KCdub3RlLWluZGV4LWNtcCcpO1xuXG4gICAgZWxlbWVudChieS5jc3MoJyNub3RlLTEtbGluaycpKS5jbGljaygpO1xuICAgIHdhaXRGb3JFbGVtZW50KCdub3RlLWNtcCcpO1xuXG4gICAgYnJvd3Nlci5uYXZpZ2F0ZSgpLmJhY2soKTtcbiAgICB3YWl0Rm9yQWxlcnQoKTtcblxuICAgIGJyb3dzZXIuc3dpdGNoVG8oKS5hbGVydCgpLmFjY2VwdCgpO1xuXG4gICAgd2FpdEZvckVsZW1lbnQoJ25vdGUtaW5kZXgtY21wJyk7XG5cbiAgICBleHBlY3QoZWxlbWVudChieS5jc3MoJ25vdGUtaW5kZXgtY21wJykpLmdldFRleHQoKSkudG9Db250YWluKCdZb3VyIE5vdGVzJyk7XG4gIH0pO1xufSk7XG4iXX0=