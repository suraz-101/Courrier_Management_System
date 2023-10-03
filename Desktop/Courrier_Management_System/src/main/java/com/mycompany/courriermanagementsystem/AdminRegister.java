/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.courriermanagementsystem;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;
import java.util.StringTokenizer;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JFrame;
import javax.swing.JOptionPane;
/**
 *
 * @author surajpandey
 */
public class AdminRegister extends javax.swing.JFrame {

    
    /**
     * Creates new form AdminRegister
     */
    public AdminRegister() {
        initComponents();
        
    }


    

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        buttonGroup1 = new javax.swing.ButtonGroup();
        jLabel_name = new javax.swing.JLabel();
        jTextField_name = new javax.swing.JTextField();
        jLabel_un = new javax.swing.JLabel();
        jTextField_un = new javax.swing.JTextField();
        jLabel_pass = new javax.swing.JLabel();
        jPasswordField_pass = new javax.swing.JPasswordField();
        jLabel_confirm = new javax.swing.JLabel();
        jPasswordField_confirm = new javax.swing.JPasswordField();
        jButton_submit = new javax.swing.JButton();
        jButton_exit = new javax.swing.JButton();
        jLabel_already = new javax.swing.JLabel();
        jLabel_signin = new javax.swing.JLabel();
        error = new javax.swing.JLabel();
        jLabel1 = new javax.swing.JLabel();
        jTextField_phn = new javax.swing.JTextField();
        jLabel2 = new javax.swing.JLabel();
        jTextField_adr = new javax.swing.JTextField();
        jLabel3 = new javax.swing.JLabel();
        jRadioButton1 = new javax.swing.JRadioButton();
        jRadioButton2 = new javax.swing.JRadioButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setTitle("Managing Staff Registration");

        jLabel_name.setFont(new java.awt.Font("Lucida Grande", 0, 14)); // NOI18N
        jLabel_name.setText("Name:");

        jTextField_name.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextField_nameActionPerformed(evt);
            }
        });

        jLabel_un.setFont(new java.awt.Font("Lucida Grande", 0, 14)); // NOI18N
        jLabel_un.setText("username:");

        jTextField_un.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextField_unActionPerformed(evt);
            }
        });
        jTextField_un.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyPressed(java.awt.event.KeyEvent evt) {
                jTextField_unKeyPressed(evt);
            }
        });

        jLabel_pass.setFont(new java.awt.Font("Lucida Grande", 0, 14)); // NOI18N
        jLabel_pass.setText("new password:");

        jPasswordField_pass.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jPasswordField_passActionPerformed(evt);
            }
        });

        jLabel_confirm.setFont(new java.awt.Font("Lucida Grande", 0, 14)); // NOI18N
        jLabel_confirm.setText("confirm  password:");

        jPasswordField_confirm.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jPasswordField_confirmActionPerformed(evt);
            }
        });

        jButton_submit.setText("SUBMIT");
        jButton_submit.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        jButton_submit.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton_submitActionPerformed(evt);
            }
        });

        jButton_exit.setText("EXIT");
        jButton_exit.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        jButton_exit.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton_exitActionPerformed(evt);
            }
        });

        jLabel_already.setFont(new java.awt.Font("Lucida Grande", 0, 10)); // NOI18N
        jLabel_already.setText("Already have an account? ");

        jLabel_signin.setForeground(new java.awt.Color(51, 51, 255));
        jLabel_signin.setText("Sign in");
        jLabel_signin.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        jLabel_signin.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                jLabel_signinMouseClicked(evt);
            }
        });

        error.setForeground(new java.awt.Color(255, 0, 51));

        jLabel1.setText("Phone number:");

        jLabel2.setText("Address:");

        jLabel3.setText("Gender:");

        buttonGroup1.add(jRadioButton1);
        jRadioButton1.setText("Male");

        buttonGroup1.add(jRadioButton2);
        jRadioButton2.setText("Female");

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addGap(122, 122, 122)
                        .addComponent(error, javax.swing.GroupLayout.PREFERRED_SIZE, 366, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(layout.createSequentialGroup()
                        .addGap(168, 168, 168)
                        .addComponent(jLabel_already)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(jLabel_signin))
                    .addGroup(layout.createSequentialGroup()
                        .addGap(153, 153, 153)
                        .addComponent(jButton_submit)
                        .addGap(82, 82, 82)
                        .addComponent(jButton_exit)))
                .addContainerGap(83, Short.MAX_VALUE))
            .addGroup(layout.createSequentialGroup()
                .addGap(62, 62, 62)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel_un)
                    .addComponent(jLabel_pass)
                    .addComponent(jLabel_confirm)
                    .addComponent(jLabel_name)
                    .addComponent(jLabel1)
                    .addComponent(jLabel2)
                    .addComponent(jLabel3))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                        .addComponent(jTextField_un)
                        .addComponent(jPasswordField_pass)
                        .addComponent(jPasswordField_confirm, javax.swing.GroupLayout.DEFAULT_SIZE, 189, Short.MAX_VALUE)
                        .addComponent(jTextField_name)
                        .addComponent(jTextField_phn)
                        .addComponent(jTextField_adr))
                    .addGroup(layout.createSequentialGroup()
                        .addComponent(jRadioButton1)
                        .addGap(18, 18, 18)
                        .addComponent(jRadioButton2)))
                .addGap(51, 51, 51))
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(36, 36, 36)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel_name)
                    .addComponent(jTextField_name, javax.swing.GroupLayout.PREFERRED_SIZE, 34, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jTextField_un, javax.swing.GroupLayout.DEFAULT_SIZE, 32, Short.MAX_VALUE)
                    .addComponent(jLabel_un))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(error, javax.swing.GroupLayout.PREFERRED_SIZE, 10, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jPasswordField_pass, javax.swing.GroupLayout.DEFAULT_SIZE, 32, Short.MAX_VALUE)
                    .addComponent(jLabel_pass))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jPasswordField_confirm, javax.swing.GroupLayout.DEFAULT_SIZE, 32, Short.MAX_VALUE)
                    .addComponent(jLabel_confirm))
                .addGap(18, 18, 18)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel3)
                    .addComponent(jRadioButton1, javax.swing.GroupLayout.PREFERRED_SIZE, 16, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jRadioButton2))
                .addGap(19, 19, 19)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel1)
                    .addComponent(jTextField_phn, javax.swing.GroupLayout.DEFAULT_SIZE, 32, Short.MAX_VALUE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED, 15, Short.MAX_VALUE)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jLabel2)
                    .addComponent(jTextField_adr, javax.swing.GroupLayout.PREFERRED_SIZE, 34, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jButton_submit)
                    .addComponent(jButton_exit, javax.swing.GroupLayout.Alignment.TRAILING))
                .addGap(18, 18, 18)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel_already)
                    .addComponent(jLabel_signin))
                .addGap(25, 25, 25))
        );

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void jTextField_nameActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jTextField_nameActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jTextField_nameActionPerformed

    private void jTextField_unActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jTextField_unActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jTextField_unActionPerformed

    private void jPasswordField_passActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jPasswordField_passActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jPasswordField_passActionPerformed

    private void jPasswordField_confirmActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jPasswordField_confirmActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jPasswordField_confirmActionPerformed

    private void jButton_submitActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton_submitActionPerformed

        FileWriter fw;
        File afile = new File("Admin.txt");
        Scanner scan;
        StringTokenizer st;
        int i;
        String line,word,userName = null;
        String name = jTextField_name.getText();
        String usern = jTextField_un.getText();
        try {
            scan = new Scanner(afile);
            
            while(scan.hasNextLine() )
            {
                line = scan.nextLine();
                
                st = new StringTokenizer(line,",");
                i=0;
                while(st.hasMoreTokens())
                {
                  word = st.nextToken();
                  
                  if(i==1)
                  {
                     if(usern.equals(word)) 
                     {
                         error.setText("username already exisit, please enter another username!!");
                         //JOptionPane.showMessageDialog(null,"usernme already exists please enter another username");
                         jTextField_un.setText(null);return;
                     }
                  }
                 i++; 
                }
             }
            scan.close();
        }
        catch (FileNotFoundException ex)
        {
        Logger.getLogger(ManagerLogin.class.getName()).log(Level.SEVERE, null, ex);
        }
        String pass = jPasswordField_pass.getText();
        String passc = jPasswordField_confirm.getText();
         String Gender = null;
        if(jRadioButton1.isSelected()==true)
        {Gender = "male";}
        if(jRadioButton2.isSelected()==true)
        {Gender = "female";}
        String phoneNumber =jTextField_phn.getText();
        String address = jTextField_adr.getText();
        

        if(name.equals("")){JOptionPane.showMessageDialog(null,"name is mandatory!!");return;}
        if(usern.equals("")){JOptionPane.showMessageDialog(null,"username is mandatory!!");return;}
        if(pass.equals("")){JOptionPane.showMessageDialog(null,"password is mandatory!!");return;}
        if(passc.equals("")){JOptionPane.showMessageDialog(null,"you need to confirm password!!");return;}
        if(phoneNumber.equals("")){JOptionPane.showMessageDialog(null,"phone number is mandatory!!");return;}
        if(address.equals("")){JOptionPane.showMessageDialog(null,"address is mandatory!!");return;}
        if(pass.equals(passc)==true)
        {
            
            if (!afile.exists())
            {
                try {
                    afile.createNewFile();
                } catch (IOException e)
                {
                    Object ex = null;
                    Logger.getLogger(AdminRegister.class.getName()).log(Level.SEVERE, null, ex);
                }
            }

            if (afile.exists())
            {
                try {

                    fw = new FileWriter(afile,true);
                    fw.write(name+ "," +usern+ "," +pass+ "," +passc+ "," +Gender+ ","+phoneNumber+ "," +address+ "\n");
                    JOptionPane.showMessageDialog(null, "data written sucessfully!!");
                    jTextField_name.setText(null);
                    jTextField_un.setText(null);
                    jPasswordField_pass.setText(null);
                    jPasswordField_confirm.setText(null);
                    jTextField_phn.setText(null);
                    jTextField_adr.setText(null);
                    fw.close();
                } catch (IOException ex) {
                    Logger.getLogger(AdminRegister.class.getName()).log(Level.SEVERE, null, ex);
                }

            }

        }

        if(pass.equals(passc)==false)
        {
            JOptionPane.showMessageDialog(null, "password doesnot match!!\n please enter correct password");
            jPasswordField_pass.setText(null);
            jPasswordField_confirm.setText(null);

        }

    }//GEN-LAST:event_jButton_submitActionPerformed

    private void jButton_exitActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton_exitActionPerformed
        ManagingStaffPanel msp = new ManagingStaffPanel();
        msp.setVisible(true);
        this.setVisible(false); 
        
    }//GEN-LAST:event_jButton_exitActionPerformed

    private void jLabel_signinMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jLabel_signinMouseClicked

           ManagerLogin ml = new ManagerLogin();
       ml.setVisible(true);
        this.setVisible(false); 

    }//GEN-LAST:event_jLabel_signinMouseClicked

    private void jTextField_unKeyPressed(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_jTextField_unKeyPressed
        // TODO add your handling code here:
    }//GEN-LAST:event_jTextField_unKeyPressed

    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(AdminRegister.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(AdminRegister.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(AdminRegister.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(AdminRegister.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new AdminRegister().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.ButtonGroup buttonGroup1;
    private javax.swing.JLabel error;
    private javax.swing.JButton jButton_exit;
    private javax.swing.JButton jButton_submit;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel_already;
    private javax.swing.JLabel jLabel_confirm;
    private javax.swing.JLabel jLabel_name;
    private javax.swing.JLabel jLabel_pass;
    private javax.swing.JLabel jLabel_signin;
    private javax.swing.JLabel jLabel_un;
    private javax.swing.JPasswordField jPasswordField_confirm;
    private javax.swing.JPasswordField jPasswordField_pass;
    private javax.swing.JRadioButton jRadioButton1;
    private javax.swing.JRadioButton jRadioButton2;
    private javax.swing.JTextField jTextField_adr;
    private javax.swing.JTextField jTextField_name;
    private javax.swing.JTextField jTextField_phn;
    private javax.swing.JTextField jTextField_un;
    // End of variables declaration//GEN-END:variables
}