import { useHistory } from "react-router-dom";
import * as C from "./styles";
import { useForm, FormActions } from '../../contexts/FormContext'
import { Theme } from "../../components/Theme";
import { ChangeEvent, useEffect } from "react";
import { SelectOption } from "../../components/SelectOption";

export const FormStep2 = () => {
  const history = useHistory()
  const { state, dispatch } = useForm();

  useEffect(()=>{
    dispatch({
      type: FormActions.setCurrentStep,
      payload: 2
    })
  }, [])

  const handleNextStep = () => {
    if(state.name !== '') {
      history.push('/step3');
    } else {
      alert('Nenhum nome digitado! Por favor digite um nome!')
    }
  }


  return (
    <Theme>
      <C.Container>
        <p>Passo 2/3</p>
        <h1>Vamos começar com o seu nome</h1>
        <p>Preencha o campo a abaixo com o seu nome completo.</p>
        
        <hr/>

        <SelectOption 
          title='Sou iniciante'
          description='Comecei a programar há menos de 2 anos'
          icon="🥳"
        />

        <SelectOption 
          title='Sou programador'
          description='Já programo há 2 anos ou mais'
          icon="😎"
        />

        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
