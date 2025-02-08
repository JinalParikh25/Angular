import { Component, inject } from '@angular/core';
import { userInputModel } from '../user-input/user-input.model';
import { investmentService } from './investment-result.service';

@Component({
  selector: 'app-investment-result',
  standalone: true,
  imports: [],
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
  

  private investmentResultService = inject(investmentService)

  get results() {
    return this.investmentResultService.resultData;
  }
  
}
