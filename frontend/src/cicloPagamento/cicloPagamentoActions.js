import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as initialize } from "redux-form";
import { showTabs, selectTab } from "../common/tab/tabActions";

const BASE_URL = "http://localhost:3003/api"

const INITIAL_VALUES = {creditos: [{}], debitos: [{}]} //limpa os campos

export function getList() {
  const request = axios.get(`${BASE_URL}/ciclopagamentos`);
  return {
    type: "LISTA_DE_PAGAMENTOS",
    payload: request,
  };
}

export function create(values) {
  return submit(values, 'post')
}

export function update(values){
  return submit(values, 'put')
}

export function remove(values){
  return submit(values, 'delete')
}

//Utiliza dentro desse modulo
function submit (values, method){
  
  return (dispatch) => {

    const id = values._id ? values._id : ''
    
    axios[method](`${BASE_URL}/ciclopagamentos/${id}`, values)
      .then((resposta) => {
        toastr.success("Sucesso", "Operação Realizada com Sucesso.");
  
        //Chama as outras Actions Creators
        dispatch(init());
      })
      .catch((e) => {
        e.response.data.errors.forEach((error) => toastr.error("Erro", error));
      });
  };
  
}

export function showUpdate(cicloPagamento){
  return [
    showTabs('tabUpdate'),
    selectTab('tabUpdate'),
    initialize('cicloPagamentoForm', cicloPagamento)
  ]
}

// Refatorar depois
export function showDelete(cicloPagamento){
  return [
    showTabs('tabDelete'),
    selectTab('tabDelete'),
    initialize('cicloPagamentoForm', cicloPagamento)
  ]
}

export function init(){
  return [
    showTabs('tabList', 'tabCreate'),
    selectTab('tabList'),
    getList(),
    initialize('cicloPagamentoForm', INITIAL_VALUES)
  ]
}