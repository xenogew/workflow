package jp.srsys.workflow.app.echo;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.MatcherAssert.assertThat;

import org.junit.jupiter.api.Test;

class EchoControllerTest {

  @Test
  void setupEchoForm() {
    var act1 = 1 + 2;
    assertThat(act1, equalTo(3));
  }

  @Test
  void index() {
    var act1 = 5 - 3;
    assertThat(act1, equalTo(2));
  }

  @Test
  void hello() {
    var act1 = 2 * 2;
    assertThat(act1, equalTo(4));
  }
}
