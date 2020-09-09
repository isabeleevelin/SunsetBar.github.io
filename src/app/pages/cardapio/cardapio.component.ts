import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css']
})
export class CardapioComponent implements OnInit {

  message = "Pedido Feito!!"
  checked = false;
  indeterminate = false;

  bebidas1=[
    {nome:'Gin and Tonica', vol:'', unidade:'500ml'},
    {nome:'Brahma', vol:'', unidade:'200ml'},
    {nome:'Budweiser', vol:'', unidade:''},
    {nome:'Boemia'},
    {nome:'Corona'}
  ];
  bebidas2=[
    {nome:'Skol', vol:'', unidade:'500ml'},
    {nome:'Stela Artois', vol:'', unidade:'200ml'},
    {nome:'Wals', vol:'', unidade:''},
    {nome:'Polar'},
  ];

  petisco1=[
    {nome:'mini coxinha'},
    {nome:'calabresa acebolada'},
    {nome:'batata frita'},
    {nome:'pastelzinho'},
    {nome:'camarão'}
  ];

  petisco2=[{nome:'carne seca'}];

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar() {
    this._snackBar.open(this.message, 'feito' ,{
      duration: 2000,
    });
  }

}
