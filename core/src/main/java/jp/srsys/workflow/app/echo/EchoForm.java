package jp.srsys.workflow.app.echo;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.io.Serial;
import java.io.Serializable;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EchoForm implements Serializable {

  @Serial
  private static final long serialVersionUID = -1577919411988421670L;

  @NotNull
  @Size(min = 1, max = 5)
  private String name;

}
