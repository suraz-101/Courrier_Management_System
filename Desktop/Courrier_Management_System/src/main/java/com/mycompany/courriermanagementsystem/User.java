/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.courriermanagementsystem;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.util.StringTokenizer;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;

/**
 *
 * @author surajpandey
 */
public class User {

    private String username;
    private String passWord;
  
    public User(String username, String passWord) {
        this.username = username;
        this.passWord = passWord;
      
    }
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassWord() {
        return passWord;
    }

    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

   
   
    
    public void login(String filepath)
    {
      String line,word;
      String userName =null, pass=null;
      String username = getUsername();
      String pword = getPassWord();
      
      Scanner scan;
      StringTokenizer st = null;
      File file = new File(filepath);
       try {
            scan = new Scanner(file);
            
            while(scan.hasNextLine() )
            {
                line = scan.nextLine();
                st = new StringTokenizer(line,",");
                int i=0;
                while(st.hasMoreTokens())
                {
                  word = st.nextToken();
                  if(i==1)
                  {
                     userName = word; 
                  }
                  if(i==2)
                  {
                      pass = word;
                  }
                    
                  i++; 
                }
                if( username.equals(userName) && (pword.equals(pass)))
                {
                    ManagingStaffPanel emp = new ManagingStaffPanel();
                    emp.setVisible(true);
                    new ManagerLogin().setVisible(false);
                    return;  
                }
           }
            JOptionPane.showMessageDialog(null,"please enter correct information");
       
            scan.close();
               
        }
        catch (FileNotFoundException ex)
        {
        Logger.getLogger(ManagerLogin.class.getName()).log(Level.SEVERE, null, ex);
        }
     
    }
    
    public void login()
    {
      String line=null,word,usern = null,paswrd =null,id = null;
      String userName =null, pass=null;
      String username = getUsername();
      String pword = getPassWord();
      
      Scanner sc;
      StringTokenizer st = null;
       try {
            sc = new Scanner(new File("deliveryperson.txt"));
            while(sc.hasNextLine())
            {
                line= sc.nextLine();
                st = new StringTokenizer(line,",");
                int i=0;
                     while(st.hasMoreTokens())
                     {
                         word = st.nextToken();
                         if(i==0)
                         {
                             id = word;  
                         }
                         if(i==2)
                         {
                             usern=word;
                             
                         }
                         if(i==3)
                         {
                            paswrd =word; 
                         }
                         i++;
                     }
                     if(username.equals(usern) && pword.equals(paswrd))
                     {
                        DeliveryStaffPanel dsp = new DeliveryStaffPanel();
                        dsp.jTextField12.setText(usern);
                        dsp.jTextField_id.setText(id);
                        dsp.setVisible(true);
                        new DeliveryPersonLogin().setVisible(false);
                        return;
                     }
            } 
             JOptionPane.showMessageDialog(null,"please enter correct information");
             sc.close();
            
            } catch (FileNotFoundException ex) {
                Logger.getLogger(DeliveryPersonLogin.class.getName()).log(Level.SEVERE, null, ex);
            }
        
    }
}
