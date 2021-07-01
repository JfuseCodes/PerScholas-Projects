package project.CreditCardManagement.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="person")
public class Person {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private int creditScore;
	private double salary;
	private String cardNumber;
	private double currentbalance;
	private int amountdue;
	private String datedue,month,day,year;
	
	public Person() {
		
	}
	
	public Person(int id, String name,int creditScore,double salary,String cardNumber,double currentbalance, int amountdue,String datedue,String month, String day,String year) {
		this.id = id;
		this.name = name;
		this.creditScore = creditScore;
		this.salary = salary;
		this.cardNumber = cardNumber;
		this.currentbalance = currentbalance;
		this.amountdue = amountdue;
		this.datedue = datedue;
		this.month = month;
		this.day = day;
		this.year = year;
		 
		
		
	}
	
	
	public String getName() { return name; }
	public int getId() { return id; }
	public int getCreditScore() { return creditScore; }
	public double getSalary() { return salary; }
	public String getMonth() {return month;}
	public String getDay() {return day;}
	public String getYear() {return year;}
	
	public String getDueDate() {
		
		datedue = getMonth() + "/" + getDay() + "/" + getYear();
		return datedue;
	}
	
	
	public double getCurrentBalance() {
		int min = 0,max = 100000, balance = (int)Math.floor(Math.random()*(max-min + 1)+min);
		currentbalance = balance;
		return currentbalance; 
		}
	
	
	public int getAmountDue() { 
		double percent = .02,
				minimumdue= (percent*currentbalance);
		
		String.format("%.2f",minimumdue);
		amountdue = (int)minimumdue;
		return (int)amountdue; }
	
	
	public String getcardNumber() {
		int min = 1000,//****-****-****-0000
				max = 9999;
			String encryptNum = "****",dash = "-";
				   
			int lastFour = (int)Math.floor(Math.random()*(max-min+1)+min) ; //four digit number
			Integer.toString(lastFour);
			String temp = Integer.toString(lastFour); //"####" 
			
			
			String tempAmex = temp.substring(0,2);//""
			String tempOther = temp.substring(0,1);

			
			
			if(tempAmex == "34"|| tempAmex=="37" ) {
				cardNumber =  "Amex "+ encryptNum + dash + encryptNum + dash + encryptNum + dash + temp;
				}
			else if(tempOther == "4") {
				cardNumber =  "Visa " + encryptNum + dash + encryptNum + dash + encryptNum + dash + temp;
				}
			else if (tempOther == "5") {
				cardNumber= "MasterCard " + encryptNum + dash + encryptNum + dash + encryptNum + dash + temp;
				}
			else if(tempOther=="6") {
				cardNumber = "Discover " + encryptNum + dash + encryptNum + dash + encryptNum + dash + temp;
				}
			else {
				cardNumber = encryptNum + dash + encryptNum + dash + encryptNum + dash + temp;
			}

			
//			cardNumber =  encryptNum + dash + encryptNum + dash + encryptNum + dash + temp;
			return cardNumber;
		
		}
		
		
	
	
	
	public void setName(String name) { this.name = name; }
	public void setId(int id) { this.id = id;}
	public void setCreditScore(int creditScore) { this.creditScore = creditScore;}
	public void setSalary(double salary) { this.salary = salary;}
	public void setCurrentBalance(double currentBalance) { this.currentbalance = currentBalance;}
	public void setAmountDue(int amountDue) { this.amountdue = amountDue;}
	public void setMonth(String month) { this.month = month;}
	public void setDay(String day) {this.day =day;}
	public void setYear(String year) {this.year = year;}
	
	public void setDueDate(String datedue) {
		datedue = this.getMonth() + "/" + this.getDay() + "/" + this.getYear();
		this.datedue = datedue;
		}
	
	public void setCardNumber(String cardNumber) {
		
		String lastFour = getcardNumber();
		String temp = lastFour; 
		String tempAmex = temp.substring(0,2);
		String tempOther = temp.substring(0);
		String encryptNum = "****",dash = "-";
		
		
		if(tempAmex.equals("34")|| tempAmex.equals("37") ) {
			this.cardNumber =  "Amex "+ encryptNum + dash + encryptNum + dash + encryptNum + dash + temp;
		}
		else if(tempOther == "4") {
			this.cardNumber =  "Visa " + encryptNum + dash + encryptNum + dash + encryptNum + dash + temp;
		}
		
		else if(tempOther == "6") {
			this.cardNumber =  "Discover " + encryptNum + dash + encryptNum + dash + encryptNum + dash + temp;
			}
		else if (tempOther == "5") {
			this.cardNumber= "MasterCard " + encryptNum + dash + encryptNum + dash + encryptNum + dash + temp;
			}
		else{
			this.cardNumber = encryptNum + dash + encryptNum + dash + encryptNum + dash + temp;
			}
		}
	
	
	@Override
	public String toString() {
		return "Person [id =" + this.id + " name =  " + this.name +  " credit score = "+ this.creditScore+ " salary = " + this.salary +" card number = " + this.cardNumber + " current balance = " + this.currentbalance + " amount due = " + this.amountdue +" due date = " + this.datedue + " month = " + this.month + " day = " + this.day + " year " + this.year + "]"; 
	}
}
