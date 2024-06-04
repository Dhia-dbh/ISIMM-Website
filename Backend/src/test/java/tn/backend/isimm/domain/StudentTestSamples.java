package tn.backend.isimm.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class StudentTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Student getStudentSample1() {
        return new Student()
            .id(1L)
            .cin("cin1")
            .numCarteEtud("numCarteEtud1")
            .email("email1")
            .lastName("lastName1")
            .firstName("firstName1")
            .classId("classId1");
    }

    public static Student getStudentSample2() {
        return new Student()
            .id(2L)
            .cin("cin2")
            .numCarteEtud("numCarteEtud2")
            .email("email2")
            .lastName("lastName2")
            .firstName("firstName2")
            .classId("classId2");
    }

    public static Student getStudentRandomSampleGenerator() {
        return new Student()
            .id(longCount.incrementAndGet())
            .cin(UUID.randomUUID().toString())
            .numCarteEtud(UUID.randomUUID().toString())
            .email(UUID.randomUUID().toString())
            .lastName(UUID.randomUUID().toString())
            .firstName(UUID.randomUUID().toString())
            .classId(UUID.randomUUID().toString());
    }
}
