## TUTORIAL

## Usando o sistema de Redirecionamento das paginas e as rotas

Vamos prestar atenção em 2 arquivos eles são o `app.routes.ts` e o `app.components.ts` sem
configurar esses dois as rotas não irão aparecer por mais que esteja completo o projeto

- Configurando o `app.components.ts` para o redirecionamento e criar o caminho disponivel

Na area:

```typescript
    @Component({
selector: 'app-root',
standalone: true,
imports: [ RouterOutlet, LoginComponent, HomeComponent],
templateUrl: './app.component.html',
styleUrl: './app.component.scss'
})
```

Nós temos o `imports: []` e dentro dele que colocamos os nossos componentes que terao as paginas,
no caso acima ele já foi configurado e esta recebendo 2 rotas que são `LoginComponent e HomeComponent`

- Configurando o `app.routes.ts` para o redirecionamento e criar o caminho disponivel

Na area:

```typescript
export const routes: Routes = [];
```

Nota-se que ele vem vazio pois não tem rotas configuradas , nos precisamos configurar ela da seguinte forma
passando um `objeto` com as propriedades `path e component` Ex:

```typescript
export const routes: Routes = [
  {
    path: "sign-up",
    component: SignUpComponent,
  },
  {
    path: "profile-area",
    component: ProfileAreaComponent,
  },
];
```

Nos passamos o `path` que vai ser o nome do caminho , conseguirmos acessar se colocarmos no endereço após o "/",  
 No `component` nos passamos o `component` da pagina que nos exemplos acima são o `SignUpComponent` e o `ProfileAreaComponent`
agora se quisermos deixar uma rota para ser o `path :""` no temos que usar da seguinte forma :
Levando em conta que ja criamos o `path: "sign-up"`

```typescript
export const routes: Routes = [
  {
    path: "sign-up",
    component: SignUpComponent,
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "sign-up",
  },
];
```

## Configurar client HTTP para fazer Requisições

- Resumindo comnfigurar para conseguir consumir uma api usando o protocolo HTTP  
  Primeiro vamos no arquivo `app.config.ts` e vamos importar e adicionar o `provideHttpClient(withFetch())` em `providers` ele vai ficar  
  dessa forma se for um projeto novo acresido com o privide de Http

```typescript
import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideHttpClient, withFetch } from "@angular/common/http";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(withFetch())],
};
```

## Manipulação de formularios com `ReactiveFormsModule`

- Primeiro precisamos importar no arquivo typescript que formos fazer a manipulação ex: `login.component.ts`  
  Primeiro vamos no arquivo `TS` do complemento que vamos fazer a manipulação e procuraremos imports dentro de `@components` segue ex:

```typescript
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
```

- Na area imports se for um projeto novo estará vazio de padrao importamos o `CommonModule` e o `ReactiveFormsModule` o CommonModule e para alguns metodos basicos do angular ja o `ReactiveFormsModule` usamos para manipulacao do formulario dinamicamente com o `TS` , temos algumas etapas que temos que fazer para conseguirmos potencializar essa manipulação sendo elas para tanto ajudar na validação , pegar valores, passar e manipular valores entre outros mecanismos mais complexo , vamos aprender o basico que e validar um formulario e manipular os valores dele vamos seguir os passos abaixo para configurar , primeiro vamos configurar no `TS` e depois no `HTML` do component que queremos manipular

1. Vamos implementar o OnInit ele e como uma funcao callback que e ativada assim que a pagina carrega para configurar fazemos da seguinte maneira vai na parte de export onde estará nossa class ela estara da seguinte maneira

```typescript
export class LoginComponent {}
```

- vamos dar um espaço após `loginComponent` e colocamos `implements OnInit` isso fara com que importamos o Oninit e que possamos usar ele ficará da seguinte maneira

```typescript
export class LoginComponent implements OnInit {}
```

2. Agora vamos tipar o formulario , criaremos uma variavel e passamos o tipo `FormGroup` passamos da seguinte maneira , usamos o ! pois ele e obrigatorio

```typescript
myForm!: FormGroup
```

- no constructor vamos passar a sintaxe do formulario que vamos ultilizar para fazer a manipulação

```typescript
constructor(private fb: FormBuilder) { }
```

- nos passamos um nome para receber o tipo e importamos ele , essa importação e a base para a validação e manipulacao segue um exemplo de usar ele para validarmos um valor que esta em um input de email vamos usar o ngOnInit ja que como e uma validacao queremos que ele sempre esteja sendo executado desde o inicio da pagina ex:

```typescript
ngOnInit(): void {
  this.myForm = this.fb.group({
      email: [null, [Validators.required,Validators.email]]
    })
}
```

Nese exemplo coloquei 2 validacoes do proprio forms que foi uma required que e o obrigatorio e a validação de email que vai precisar passar um email ou um valor que tenha @

3. Vamos usar agora o `myForm` para pegar dados e manipular , vou começar pegando dados da input name ex:

```typescript
this.myForm.value.name;
```

com isso ele vai puxar o valor name claro que isso configurado o html o que vamos ver nestante após vermos como manipular com o `myForm` ex:

```typescript
this.myForm.patchValue({
  name: "Juka",
  email: "Juka@email.com",
});
```

Esse foi um exeplo xumpado de valores se quisermos ser dinamico poderiamos usar a templete string

4. Vamos configurar o html temos primeiro que ir na tag `form` e passamos um elemento nele chamado `[formGroup]` ele será o encarregado de linkar nosso forms ao `myForm` do arquivos `TS` que vamos manipular ex:

```html
<form [formGroup]="myForm" (ngSubmit)="atualizarUsuario()">

  <input type="text" formControlName="name" />

  <input  type="text" placeholder="Email" formControlName="email"  />

  <input  type="password" placeholder="Senha" formControlName="password" />

  <button type="submit"  [disabled]="!myForm.valid">ATUALIZAR</button>
</form>
```
Nesse vaso acima usamos o `formGroup` para linkar com o `myForm` sempre usando o `formControlName` para nomear os input para consguirmos manipular no TS um exemplo do uso dele seria qunado fazemos essa chamada `this.myForm.value.name` na parte apos o value e o que chamamos nesse pequeno exemplo acima foi o name que chamamos para pegar o valor  
Nota-se que tambem manipulamos o botao com o form como o button esta dentro da tag `form` ele esta incluso na manipulação deixamos ele disabilitado com o `[disabled]` e passamos as circustancia que no caso é quando todos o campos do input form for preenchido ai ele vai habilitar novamente o button , se nota tbm que no button esta o type submit isso que dizer que ele vai mandar todos esse dados para onde o form `(ngSubmit)=atualizarUsuario()` mandar que nesse caso ele esta passando para uma função de nome atualizarUsuario ele esta passando e chamadno a função