/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.courriermanagementsystem;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
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
public class ManagerLogin extends javax.swing.JFrame {

    /**
     * Creates new form ManagerLogin
     */
    public ManagerLogin() {
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

        jPanel2 = new javax.swing.JPanel();
        jPanel3 = new javax.swing.JPanel();
        jTextField_un = new javax.swing.JTextField();
        jPasswordField_pass = new javax.swing.JPasswordField();
        jButton_submit = new javax.swing.JButton();
        jLabel1 = new javax.swing.JLabel();
        jSeparator1 = new javax.swing.JSeparator();
        jSeparator3 = new javax.swing.JSeparator();
        Back = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setTitle("LOGIN ");
        setUndecorated(true);

        jPanel2.setBackground(new java.awt.Color(0, 102, 102));
        jPanel2.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jPanel3.setBackground(new java.awt.Color(102, 0, 0));
        jPanel3.setBorder(javax.swing.BorderFactory.createBevelBorder(javax.swing.border.BevelBorder.RAISED));
        jPanel3.setLayout(new org.netbeans.lib.awtextra.AbsoluteLayout());

        jTextField_un.setBackground(new java.awt.Color(102, 0, 0));
        jTextField_un.setFont(new java.awt.Font("Lucida Grande", 1, 18)); // NOI18N
        jTextField_un.setForeground(new java.awt.Color(153, 153, 153));
        jTextField_un.setText("Username");
        jTextField_un.setBorder(null);
        jTextField_un.setCursor(new java.awt.Cursor(java.awt.Cursor.TEXT_CURSOR));
        jTextField_un.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                jTextField_unMouseClicked(evt);
            }
        });
        jTextField_un.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jTextField_unActionPerformed(evt);
            }
        });
        jPanel3.add(jTextField_un, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 90, 267, 38));

        jPasswordField_pass.setBackground(new java.awt.Color(102, 0, 0));
        jPasswordField_pass.setFont(new java.awt.Font("Lucida Grande", 0, 18)); // NOI18N
        jPasswordField_pass.setText("ENTER PASSWORD");
        jPasswordField_pass.setBorder(null);
        jPasswordField_pass.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                jPasswordField_passMouseClicked(evt);
            }
        });
        jPasswordField_pass.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jPasswordField_passActionPerformed(evt);
            }
        });
        jPanel3.add(jPasswordField_pass, new org.netbeans.lib.awtextra.AbsoluteConstraints(32, 155, 267, 38));

        jButton_submit.setText("Submit");
        jButton_submit.setCursor(new java.awt.Cursor(java.awt.Cursor.HAND_CURSOR));
        jButton_submit.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton_submitActionPerformed(evt);
            }
        });
        jPanel3.add(jButton_submit, new org.netbeans.lib.awtextra.AbsoluteConstraints(110, 220, -1, -1));

        jLabel1.setFont(new java.awt.Font("Lucida Grande", 0, 18)); // NOI18N
        jLabel1.setForeground(new java.awt.Color(255, 255, 255));
        jLabel1.setText("LOGIN FORM");
        jPanel3.add(jLabel1, new org.netbeans.lib.awtextra.AbsoluteConstraints(101, 29, 130, 31));
        jPanel3.add(jSeparator1, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 130, 260, -1));
        jPanel3.add(jSeparator3, new org.netbeans.lib.awtextra.AbsoluteConstraints(30, 190, 260, -1));

        jPanel2.add(jPanel3, new org.netbeans.lib.awtextra.AbsoluteConstraints(100, 30, 320, 290));

        Back.setText("Back");
        Back.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                BackActionPerformed(evt);
            }
        });
        jPanel2.add(Back, new org.netbeans.lib.awtextra.AbsoluteConstraints(10, 10, -1, -1));

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel2, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 532, Short.MAX_VALUE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel2, javax.swing.GroupLayout.DEFAULT_SIZE, 372, Short.MAX_VALUE)
        );

        pack();
        setLocationRelativeTo(null);
    }// </editor-fold>//GEN-END:initComponents

    private void jTextField_unMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jTextField_unMouseClicked
        jTextField_un.setText(null);

    }//GEN-LAST:event_jTextField_unMouseClicked

    private void jTextField_unActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jTextField_unActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jTextField_unActionPerformed

    private void jPasswordField_passMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_jPasswordField_passMouseClicked
        jPasswordField_pass.setText(null);
    }//GEN-LAST:event_jPasswordField_passMouseClicked

    private void jPasswordField_passActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jPasswordField_passActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_jPasswordField_passActionPerformed

    private void jButton_submitActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton_submitActionPerformed
     
        String usernamekb = jTextField_un.getText();
        String passwordkb = jPasswordField_pass.getText();
        String filepath = "admin.txt";
        if(usernamekb.equals("")){JOptionPane.showMessageDialog(null,"username is mandatory!!");return; }
        if (passwordkb.equals("")){JOptionPane.showMessageDialog(null,"password is mandatory!!");return;}
        User user = new User(usernamekb,passwordkb);
        user.setUsername(usernamekb);
        user.setPassWord(passwordkb);
        user.login(filepath);
        jTextField_un.setText(null);
        jPasswordField_pass.setText(null);    
    }//GEN-LAST:event_jButton_submitActionPerformed

        
      
           
    private void BackActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_BackActionPerformed
        
        this.setVisible(false);
        
    }//GEN-LAST:event_BackActionPerformed

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
            java.util.logging.Logger.getLogger(ManagerLogin.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(ManagerLogin.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(ManagerLogin.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(ManagerLogin.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>
        //</editor-fold>
        //</editor-fold>
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                new ManagerLogin().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton Back;
    private javax.swing.JButton jButton_submit;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JPanel jPanel3;
    private javax.swing.JPasswordField jPasswordField_pass;
    private javax.swing.JSeparator jSeparator1;
    private javax.swing.JSeparator jSeparator3;
    private javax.swing.JTextField jTextField_un;
    // End of variables declaration//GEN-END:variables
}
