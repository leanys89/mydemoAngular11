package com.gazgeek.helloworld.utils;

import java.util.function.Predicate;
import com.gazgeek.helloworld.dto.*;

public class TransactionUtils {

  public static Predicate<Transaction> filtroCategoria(int id) {
    return (Transaction trans) -> {
      return trans.getCategoria().getId() == id;
    };
  }

}