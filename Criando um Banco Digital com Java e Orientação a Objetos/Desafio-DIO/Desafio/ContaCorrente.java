import org.omg.CORBA.PRIVATE_MEMBER;

public class ContaCorrente extends conta {
public void imprimirExtrato(){
    System.out.println("****Extrato Conta Corrente****");
    super.imprimirInfosComuns();
}
}