package com.gazgeek.helloworld.controller;

import java.util.*;

import com.gazgeek.helloworld.dto.*;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class TransactionController {

    private ArrayList<Transaction> listTransactions;

    public TransactionController() {

        listTransactions = new ArrayList<Transaction>();
        Transaction t1 = new Transaction("asds", "ffdf", 345.67, "fgdfdfgfdg", "32sdw32", "sffsf", "fdfd", "dfsd234dfs",
                "fgfgdfwe", "fddg", "euro", "fcdfdf", "nbngfhg", "Si", "Si", "", 2, "16/04/2021", "16/04/2021",
                "Movistar", "CHL", "asdsad", 1236.23, 1545.3, 4562, "Pendiente", "", 23.6,
                new Categoria(1, "Primer Contracargo Total"));

        Transaction t2 = new Transaction("asds", "ffdf", 345.67, "fgdfdfgfdg", "32sdw32", "sffsf", "fdfd", "dfsd234dfs",
                "fgfgdfwe", "fddg", "euro", "fcdfdf", "nbngfhg", "Si", "Si", "", 1, "16/04/2021", "16/04/2021",
                "Movistar", "CHL", "asdsad", 1236.23, 1545.3, 4562, "Pendiente", "", 23.6,
                new Categoria(2, "Segundo Contracargo Parcial"));

        listTransactions.add(t1);
        listTransactions.add(t2);
    }

    @PostMapping("transactions")
    // @CrossOrigin
    public ApiResponse getAllTransactions(@RequestParam(value = "from", defaultValue = "0") int from,
            @RequestParam(value = "size", defaultValue = "10") int size) {
        ApiResponse resp = new ApiResponse();
        resp.setMessage("ok");
        resp.setData(listTransactions);
        resp.setStatus(200);
        return resp;
    }

    @PostMapping("transaction")
    @CrossOrigin
    public ApiResponse getTransactionId(@RequestParam("id") int num_tc) {
        ApiResponse resp = new ApiResponse();

        for (int x = 0; x < listTransactions.size(); x++) {
            Transaction transaction = listTransactions.get(x);
            if (transaction.getNum_tc() == num_tc) {

                resp.setMessage("ok");
                resp.setData(transaction);
                resp.setStatus(200);
                return resp;
            }
        }
        resp.setMessage("not found");
        resp.setStatus(404);
        return resp;

    }

    @PostMapping("filter/transaction")
    public ApiResponse filterTransaction(@RequestBody Map<String, Object> body) {

        ApiResponse resp = new ApiResponse();
        Object categoria = body.get("ct");
        ArrayList<Transaction> listTransFilter = new ArrayList<Transaction>(listTransactions);

        if (categoria != null) {
            int idCat = (int) categoria;
            for (int i = 0; i < listTransactions.size(); i++) {
                Transaction transaction = listTransactions.get(i);
                if (transaction.getCategoria().getId() != idCat) {
                    listTransFilter.remove(i);
                }
            }

        }
        resp.setMessage("ok");
        resp.setData(listTransFilter);
        resp.setStatus(200);
        return resp;
    }

}
