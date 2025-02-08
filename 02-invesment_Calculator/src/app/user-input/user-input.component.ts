import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { userInputModel } from './user-input.model';
import { investmentService } from '../investment-result/investment-result.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  private investmentService = inject(investmentService);
  inital_Invesment = 0;
  annual_Investment = 0;
  expected_Return = 0;
  duration = 0;

  userInputSubmitted(){
    this.investmentService.calculateInvestmentResults({
      initialInvestment : this.inital_Invesment,
      annualInvestment : this.annual_Investment,
      expectedReturn : this.expected_Return,
      duration : this.duration
    });
  }
}
